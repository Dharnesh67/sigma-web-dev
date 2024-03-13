#include <bits/stdc++.h>
using namespace std;
int main()
{
    vector<int> v = {1, 2, 3, 4, 5};
    for (auto i : v)
    {
        cout << i << " ";
    }
    cout << endl;
    v.erase(v.begin() + 0);
    for (auto i : v)
    {
        cout << i << " ";
    }
}