#include<bits/stdc++.h>
using namespace std;
#define ll long long
#define pii pair<int, int>
#define pll pair<long long, long long>
#define vi vector<int>
#define vll vector<long long>
#define mii map<int, int>
#define si set<int>
#define sc set<char>

#define f(i,s,e) for(long long int i=s;i<e;i++)
#define cf(i,s,e) for(long long int i=s;i<=e;i++)
#define rf(i,e,s) for(long long int i=e-1;i>=s;i--)
#define pb push_back
#define eb emplace_back
int fun(string aa){
    int n=0;
    f(i,0,aa.size()){
       n+=(aa[i]-'a');
    }
    return n;
}
int main(){
    string aa="hello";
    int n=fun(aa);
    int m=fun("ellho");
    cout<<n<<": "<<m<<endl;
}