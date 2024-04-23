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
vector<vi>result;
void subset(vector<int>&s,int l,int h ){
    if(l==h){
        result.pb(s);
        return;
    }
    for(int i =l;i<=h;i++){
        swap(s[i],s[l]);    
        subset(s,l+1,h);
        swap(s[l],s[i]);
    }
}
int main(){
    ios::sync_with_stdio(0);
    cin.tie(0);
    cout.tie(0);
    vector<int>s={1,2,3};
    int n=s.size();
    vector<int>prefix;
    subset(s,0,n-1);
    for(auto x:result){
        for(auto y:x){
            cout<<y<<" ";
        }
        cout<<endl;
    }
    return 0;
}