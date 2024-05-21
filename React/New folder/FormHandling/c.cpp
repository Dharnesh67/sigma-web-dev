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

class Solution {
public:
    int sz(ListNode* head){
        int len=0;
        ListNode* temp=head;
        while(temp){
            len++;
            temp=temp->next;
        }
       return len; 
    }
    ListNode* reverseKGroup(ListNode* head, int k) {
        int len=sz(head);
        ListNode* dummy=new ListNode(0);
        ListNode* prev=dummy;
        prev->next=head;
        ListNode* curr=head;
        ListNode* next=head->next;
        while(len>=k){
            curr=prev->next;
            next=curr->next;
            for(int i =1;i<k;i++){
                curr->next=next->next;
            }
            prev=curr;
            len-=k;
        }
    }
};

int main(){
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);
int t;
while(t--){}
}