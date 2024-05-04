#include<bits/stdc++.h>
using namespace std;

#define f(i,s,e) for(long long int i=s;i<e;i++)
#define vi vector<int>

int main() {
    int t;
    cin>>t;
    f(j,0,t){
        int n,m;
        cin>>n>>m;
        if(n+m<11 || n<4 || m<4){
            cout<<-1<<endl;
            continue; // Skip the rest of this test case
        }
        vi bat(n);
        vi bowl(m);
        f(i,0,n){
             int x;
            cin>>x;
          bat[i]=x;
        }
        f(i,0,m){
            int x;
            cin>>x;
          bowl[i]=x;
        }
        sort(bat.begin(),bat.end(),greater<int>());
        sort(bowl.begin(),bowl.end(),greater<int>());
        int ans=0;
        int taken=0;
        int i =0;
        while(i<n and i<m){
            ans+=(bat[i]+bowl[i]);
            i++;
            taken+=2;
            if(taken==8){
                break;
            }
        }
        if(i<n and i<m){
            taken+=2;
            ans+=(bat[i]+bowl[i]);//taken==10;
            i++;
        }
        if(taken==10){
            if(i<n and i<m){
                ans+=max(bat[i],bowl[i]);
                 taken++;
                 i++;
            }
            else if(i<n){
                ans+=bat[i];
                i++;
                taken++;
            }
            else{
                ans+=bowl[i];
                 taken++;
            }
            
        }
        cout<<ans<<"\n";
    }
}