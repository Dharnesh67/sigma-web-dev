#include <bits/stdc++.h>
using namespace std;
class Solution
{
public:
    vector<vector<int>> insert(vector<vector<int>> &in, vector<int> &nin)
    {
        int i = 0;
        int j = 0;
        vector<vector<int>> res;
        while (in[i][1]<nin[0] and i < in.size())
        {
            res.push_back(in[i]);
            i++;
        }
        j = i;
        while (in[j][0] <=nin[1] and j < in.size())
        {
            nin[0] = min(nin[0], in[j][0]);
            nin[1]=max(nin[1],in[j][1]);
            j++;
        }
        res.push_back(nin);
        while(j<in.size())
        {
            res.push_back(in[j]);
            j++;
        }
        return res;
    }
};
int main()
{
   
    vector<vector<int>> in ={{1,2},{3,5},{6,7},{8,10},{12,16}}; // little bigger array
    vector<int> nin = {4,8};
    Solution s;
    vector<vector<int>> res = s.insert(in, nin);
    for (int i = 0; i < res.size(); i++)
    {
        for (int j = 0; j < res[i].size(); j++)
        {
            cout << res[i][j] << " ";
        }
        cout << endl;
    }
    return 0;
}