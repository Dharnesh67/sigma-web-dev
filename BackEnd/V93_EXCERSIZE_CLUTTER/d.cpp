#include <bits/stdc++.h>
using namespace std;
vector<list<int>> graph;
int bfs(int src, unordered_set<int>&visited)
{
    queue<int> q;
    q.push(src);
    visited.insert(src);
    int count = 1;
    while (!q.empty())
    {
        int u = q.front();
        q.pop();
        for (auto v : graph[u])
        {
            if (!visited.count(v))
            {
                visited.insert(v);
                q.push(v);
                count++;
            }
        }
    }
    return count;
}
int main()
{
    int n, m;
    cin >> n >> m;
    graph.resize(n + 1, list<int>());
    for (int i = 0; i < m; i++)
    {
        int u, v;
        cin >> u >> v;
        graph[u].push_back(v);
    }
    int ans = 1;
    unordered_set<int> visited;
    for (int i = 1; i <= n; i++)
    {
        if (!visited.count(i))
        {
            ans =max(ans,bfs(i, visited));
        }
    }
    cout << ans << endl;
}