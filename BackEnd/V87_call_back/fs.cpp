#include <bits/stdc++.h>
using namespace std;

class Solution
{
public:
    vector<vector<string>> ans;
    bool palindrome(string s, int i, int j)
    {
        while (i <= j)
        {
            if (s[i] == s[j])
            {
                i++;
                j--;
            }
            else
                return false;
        }
        return true;
    }
    void f(vector<string> &res, string s, int idx)
    {
        if (i == s.length())
        {
            ans.push_back(res);
            return;
        }
        for (int i = idx; i < s.length(); i++)
        {
            if (palindrome(s, idx, i))
            {
                res.push_back(s.substr(idx,i-idx+1));
                f(res, s, i + 1);
                res.pop_back();
            }
        }
    }
    vector<vector<string>> partition(string s)
    {
        vector<string> res;
    }
};

int main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);
    int t;
    while (t--)
    {
    }
}