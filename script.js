const projects = {
  1: {
      title: "Personalized Banking System using c++",
      description: ["Simple Banking System that provides each user their own personal account that can add",
          " or substract by Depositing or withdrawing balance unique to each account created"
      ],
      output: [
          "This is the main menu of the program",
          "                  ",
          "=== BANKING SYSTEM MAIN MENU ===",
          "1. Register",
          "2. Login",
          "3. exit",
          "Enter your choice:",
          "                   ",
          "This is the menu for when you successfully logged in",
          "=== BANKING MENU ===",
          "Welcome, j!",
          "1. View Balance",
          "2. Deposit Money",
          "3. Withdraw Money",
          "0. Logout",
          "Enter your choice: "

      ],
      code: `#include <iostream>
#include <string>
#include <cstring>
#include <cctype>
using namespace std;

struct data{
    char username[20];
    char password[20];
    char fullname[20];
    float balance;
};

data info[3];
int counts = 0;
void registerUser(); void login(); void BankingMenu(int i);

int main(){

    while(true){
     int ch;
    system("cls");
    cout << "1. login\n2. register\n0. exit\nEnter choice: ";
    cin >> ch;

    switch(ch){
    case 1:
        login();
        break;
    case 2:
        registerUser();
        break;
    default:
        cout << "\nInvalid choice!\n";
        return 0;
    }
}
}

void registerUser(){
    system("cls");
    if(counts == 3){
        cout << "User limit has been reached!";
        system("pause");
    }
    char tempuser[20];
    char temppass[20];
    char tempname[20];
    cin.ignore();
    cout << "Enter Fullname: ";
    cin.getline(tempname, 20);
    cout << "Enter Username: ";
    cin.getline(tempuser, 20);
    cout << "Enter Password: ";
    cin.getline(temppass, 20);
    for(int i = 0; i < counts; i++){
        if(strcmp(info[i].username, tempuser)==0){
            cout << "Username has been used!\n";
            system("pause");
            return;
        }
    }
    strcpy(info[counts].username, tempuser);
    strcpy(info[counts].password, temppass);
    strcpy(info[counts].fullname, tempname);
    info[counts].balance = 0;
    counts++;

    cout << "Registered successfully!\n";
    system("pause");
}
void login(){
    if(counts == 0){
        cout << "No accounts yet!\n";
        system("pause");
    }
    else{
    char tempuser[20];
    char temppass[20];
    cin.ignore();
    cout << "Enter Username: ";
    cin.getline(tempuser, 20);
    cout << "Enter Password: ";
    cin.getline(temppass, 20);
    for(int i = 0; i < counts; i++){
        if(strcmp(info[i].username, tempuser)==0 && strcmp(info[i].password, temppass)==0){
            BankingMenu(i);
            return;
        }
    }
    cout << "Invalid Username/Password";
    return;
}
}
void BankingMenu(int i){
    bool logined = true;
    while(logined){
    system("cls");
    int ch;
    float deposit;
    float withdraw;
    cout << "=====Menu=====\n";
    cout << "Welcome " << info[i].fullname << "!\n";
    cout << "1. Deposit\n2.Withdraw\n3.View balance\n0. logout\nEnter choice: ";
    cin >> ch;
    switch(ch){
    case 1:
        cout << "Enter amount to deposit: ";
        cin >> deposit;
        if(deposit <= 0){
            cout << "Invalid deposit!" << endl;
            system("pause");
        }
        else{
            info[i].balance += deposit;
            cout << "Deposit successfully" << endl;
            system("pause");
        }
        break;
     case 2:
         cout << "Enter amount to withdraw: ";
        cin >> withdraw;
        if(withdraw > info[i].balance){
            cout << "Invalid withdraw!" << endl;
            system("pause");
        }
        else{
            info[i].balance -= withdraw;
            cout << "Deposit successfully" << endl;
            system("pause");
        }
        break;
     case 3:
         cout << "Balance: " << info[i].balance << endl;
         system("pause");
        break;
     case 0:
         logined = false;
        break;
    }
}
}

`
  },
  2: {
      title: "Bank transaction system using linked list in c++",
      description: "A Bank transaction program that utilize linked list, storing balance and backtrackng past transactions.",
      output: [
        "This is the option of what fuction you desire to use",
        "",
        "=== BANKING TRANSACTION SYSTEM ===",
        "[1] Add transaction",
        "[2] Check balance", 
        "[3] Check Negative balance",
        "[5] Check Largest Deposit",
        "[7] Check Largest withdrawal",
        "[8] Backtrack transaction",
        "[0] Exit",
        "Enter choice: ",
        ""
      ],
      code: `#include <iostream>
using namespace std;

struct Node {
    int amount;
    Node* next;
};

Node* head = nullptr;

void transact();
void checkblnc();
void checknega();
void largest();
void largewithdraw();
void backtrack();

int main() {

    int ch;
    while (true) {
    system("cls");
        cout << "\n[1] Add transaction";
        cout << "\n[2] Check balance";
        cout << "\n[3] Check Negative balance";
        cout << "\n[5] Check Largest Deposit";
        cout << "\n[7] Check Largest withdrawal";
        cout << "\n[8] Backtrack transaction";
        cout << "\n[0] Exit";
        cout << "\nEnter choice: ";
        cin >> ch;

        switch (ch) {
            case 1:
                transact();
                break;
            case 2:
                checkblnc();
                break;
            case 3:
                checknega();
                break;
            case 5:
                largest();
                break;
             case 7:
                largewithdraw();
                break;
            case 8:
                backtrack();
                break;
            case 0:

                return 0;
            default:
                cout << "Invalid choice. Try again.\n";
        }
    }
}

void transact() {
    int amt;
    cout << "\nEnter amount (+100 to deposit, -100 to withdraw): ";
    cin >> amt;

    if (amt == 0) {
        cout << "Invalid amount. Transaction cancelled.\n";
        return;
    }

    Node* newNode = new Node;
    newNode->amount = amt;
    newNode->next = nullptr;

    if (head == nullptr) {
        head = newNode;
    } else {
        Node* temp = head;
        while (temp->next != nullptr) {
            temp = temp->next;
        }
        temp->next = newNode;
    }

    cout << "Transaction recorded.\n";
    system("pause");
}


void checkblnc() {
    int balance = 0;
    Node* temp = head;

    while (temp != nullptr) {
        balance += temp->amount;
        temp = temp->next;
    }

    cout << "Current balance: " << balance << endl;
    system("pause");
}

void checknega(){
    int runblnc = 0;
    Node* temp = head;

    while(temp->next != nullptr){
        runblnc += temp->amount;
        temp = temp->next;
        if(runblnc < 0){
            cout << "Negative balance somewhere\n";
            return;
        }
    }
    cout << "\nNo negative balance\n";
    system("pause");
}
void largest(){
    int large = 0;
    Node* temp = head;

    while(temp->next != nullptr){
        temp = temp->next;
        if(temp->amount > large){
            large = temp->amount;
        }
    }
    cout<< "\n Largest deposit: " << large << endl;
    system("pause");
}
void largewithdraw(){
    int large = 0;
    Node* temp = head;

    while(temp->next != nullptr){
        temp = temp->next;
        if(temp->amount < large){
            large = temp->amount;
        }
    }
    cout<< "\n Largest withdrawal: " << large << endl;
    system("pause");
}
void backtrack(){
    if(head == nullptr){
        cout << "No transaction\n";
        system("pause");
        return;s
    }
   else{
    Node* temp = head;
     while(temp != nullptr){
        if(temp->amount < 0){
            cout << "Withdrawn: " << temp->amount << endl;
        }
        else{
            cout << "Deposited: " << temp->amount << endl;
        }

        temp = temp->next;
     }
 system("pause");
}
}
`
  },
  3: {
      title: "Calculator app using Java Swing",
      description: "A Calculator app that can solve numbers with integers.",
      output: [
        "A calculator app that shows UI", 
      ],
      code: `//Computation function 
      private void equalActionPerformed(java.awt.event.ActionEvent evt) {                                      
        textResult.setText(textResult.getText()+" = ");
        
        String str = textResult.getText();
        String[] substr = str.split("\\s+");
        float num1 = Float.parseFloat(substr[0]);
        float num2 = Float.parseFloat(substr[2]);
        if(flag == 1){
            textResult.setText(textResult.getText()+" "+(num1+num2));
        }
        else if(flag == 2){
            textResult.setText(textResult.getText()+" "+(num1-num2));
        }
        else if(flag == 3){
            textResult.setText(textResult.getText()+" "+(num1/num2));
        }
        else if(flag == 5){
            textResult.setText(textResult.getText()+" "+(num1*num2));
        }
    }`
    
  }
};

document.querySelectorAll('.project-btn').forEach(btn => {
  btn.addEventListener('click', () => {
      const projectId = btn.dataset.project;
      showProjectDetail(projectId);
  });
});


function showProjectDetail(projectId) {
  const project = projects[projectId];
  document.getElementById('projects').style.display = 'none';
  document.getElementById('projectDetail').style.display = 'block';
  
  // Set project content
  document.getElementById('projectTitle').textContent = project.title;
  document.getElementById('projectDescription').textContent = project.description;
  document.getElementById('projectOutput').textContent = project.output.join('\n');
  document.getElementById('sourceCode').textContent = project.code;
}

function showProjectList() {
  document.getElementById('projects').style.display = 'grid';
  document.getElementById('projectDetail').style.display = 'none';
}
