#include <bits/stdc++.h>
using namespace std;
class Solution
{
public:
    bool isPossibleToSplit(vector<int> &nums)
    {
        unordered_map<int, int> mp;
        // Iterate through the array to populate the frequency map
        for (int i = 0; i < nums.size(); i++)
        {
            mp[nums[i]]++;
        }
        for (auto x : mp)
        {
            if(x.second>0) return false;
        }

        return true;
    }
};
int main()
{
    Solution s;
    vector<int> nums = {2, 10, 2, 7, 8, 9, 7, 6, 6, 9};
    // vector<int> nums = {8,9,8,5,9,3,3,1,2,1};
    cout << s.isPossibleToSplit(nums);
    return 0;
}