#include <bits/stdc++.h>
using namespace std;
#define ll long long
#define pii pair<int, int>
#define pll pair<long long, long long>
#define vi vector<int>
#define vll vector<long long>
#define mii map<int, int>
#define si set<int>
#define sc set<char>

#define f(i, s, e) for (long long int i = s; i < e; i++)
#define cf(i, s, e) for (long long int i = s; i <= e; i++)
#define rf(i, e, s) for (long long int i = e - 1; i >= s; i--)
#define pb push_back
#define eb emplace_back
int count = 0;
bool printsubsequencesWithsumk(vector<int> &v, int i, int n, int k, int sum, vector<int> &ans)
{
    if (i >= n)
    {
        if (sum == k)
        {
            for (int x : ans)
                cout << x << " ";
            cout << endl;
        }
        return sum == k;
    }
    if (sum > k)
    {
        return false;
    }
    if (sum == k)
    {
        for (int x : ans)
            cout << x << " ";
        cout << endl;
        return true;
    }
    ans.push_back(v[i]);
    bool take =printsubsequencesWithsumk(v, i + 1, n, k, sum + v[i], ans);
    if(take) return true;
    ans.pop_back();
    bool notake=printsubsequencesWithsumk(v, i + 1, n, k, sum, ans);
    if(notake) return true;
}
int main()
{
    ios::sync_with_stdio(0);
    cin.tie(0);
    cout.tie(0);
    // int t;
    // cin>>t;
    // while(t--){
    //     int n;
    //     cin>>n;
    //     int a[n];
    //     f(i,0,n){
    //         cin>>a[i];
    //     }
    //     int ans=0;
    //     f(i,0,n-1){
    //         int mn=min(a[i],a[i+1]);
    //         int mx=max(a[i],a[i+1]);
    //         while(2*mn<mx){
    //             mn*=2;
    //             ans++;
    //         }
    //     }
    //     cout<<ans<<endl;
    // }
    vector<int> v = {1, 2, 1, 2, 1};
    vector<int> ans;
    printsubsequencesWithsumk(v, 0, v.size(), 3, 0, ans);
    return 0;
}