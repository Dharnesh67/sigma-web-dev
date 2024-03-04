#include <bits/stdc++.h>
#define pp pair<int, pair<int, int>>
using namespace std;

class Solution
{
public:
    vector<int> parent;
    vector<int> rank;
    int find(int a) 
    {
        return parent[a] = ((parent[a] == a) ? a : find(parent[a]));
    }
    void Union(int a, int b)
    {
        a = find(a);
        b = find(b);
        if (a == b)
            return;
        if (rank[a] >= rank[b])
        {
            rank[a]++;
            parent[b] = a;
        }
        else if (rank[a] < rank[b])
        {
            rank[b]++;
            parent[a] = b;
        }
    }
    vector<pair<int, pair<int, int>>> graph;
    static bool compare(pp e1, pp e2)
    {
        return e1.first < e2.first;
    }
    int minCostConnectPoints(vector<vector<int>> &p)
    {
        parent.resize(p.size());
        rank.resize(p.size(), 1);
        for (int i = 0; i < p.size(); i++)
        {
            parent[i] = i;
        }
        for (int i = 0; i < p.size(); i++)
        {
            for (int j = i + 1; j < p.size(); j++)
            {
                int dis = abs(p[i][0] - p[j][0]) + abs(p[i][1] - p[i][1]);
                graph.push_back({dis, {i, j}});
            }
        }
        sort(graph.begin(), graph.end(), compare);
        int ans = 0;
        int edges=0;
        for (int i = 0; i < graph.size(); i++)
        {
            auto x = graph[i];
            int f1 = find(x.second.first);
            int f2 = find(x.second.second);
            if (f1 != f2)
            {
                Union(f1, f2);
                ans+=x.first;
                edges++;
            }
            if(edges==(p.size()-1)){
                break;
            }
        }

        return ans;
    }
};