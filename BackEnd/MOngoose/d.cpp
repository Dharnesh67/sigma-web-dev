#include <bits/stdc++.h>
using namespace std;
void generate_permutations(string prefix, string remaining)
{
    if (remaining == "")
    {
        cout << prefix << "  ";
        return;
    }

    for (int i = 0; i < remaining.length(); i++)
    {
        char ch = remaining[i];
        generate_permutations(prefix + ch, remaining.substr(0, i) + remaining.substr(i + 1));
    }
}

void f(string s, int st = 0)
{
    if (st == s.length())
    {
        cout << s<<endl;
        return;
    }
    for (int i = st; i < s.length(); i++)
    {
        swap(s[st],s[i]);
        f(s,st+1);
        swap(s[st],s[i]);
    }
}
int main()
{
    string s = "abc";
    // generate_permutations("", s);
    f(s);
}