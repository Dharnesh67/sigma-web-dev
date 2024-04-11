#include<bits/stdc++.h>
using namespace std;
class Solution {
public:
    int leastInterval(vector<char>& tasks, int n) {
        vector<char>v;
        unordered_map<char,int>mp;
        pair<char,int>p={'1',0};
        for(char i : tasks){
            mp[i]++;
            if(mp[i]>p.second){
                p.first=i;
                p.second=mp[i];
            }
        }
        int ans=p.second+(n*(p.second-1))+(mp.size()-1);
        return ans;
    }
};
int main(){
    Solution s;
    vector<char>tasks= {'A','A','A','B','B','C'};
    cout<<s.leastInterval(tasks,1);
}