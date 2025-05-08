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
using namespace std;

// Global variables
int control = 0;                        // User counter
int balance[10] = {};                   // Account balances
int depositMoney[10] = {};              // Deposit records
string userArray[10] = {};              // Usernames storage
string nameArray[10] = {};              // Full names storage
string passArray[10] = {};              // Passwords storage

// Function prototypes
bool checkUsername(string userName);
void registerUser();
void loginUser();
void bankingMenu(int userIndex);
void deposit(int userIndex);
void withdraw(int userIndex);
void viewBalance(int userIndex);

int main() {
    int mainChoice = 0;

    while(true) {
        system("cls");
        cout << "=== BANKING SYSTEM MAIN MENU ===" << endl;
        cout << "1. Register" << endl;
        cout << "2. Login" << endl;
        cout << "3. Exit" << endl;
        cout << "Enter your choice: ";
        cin >> mainChoice;
        cin.ignore();

        switch(mainChoice) {
            case 1:
                registerUser();
                break;
            case 2:
                loginUser();
                break;
            case 3:
                cout << "Exiting system. Goodbye!" << endl;
                return 0;
            default:
                cout << "Invalid choice! Please try again." << endl;
                system("pause");
        }
    }
}

// Check if username already exists
bool checkUsername(string userName) {
    for(int i = 0; i < control; i++) {
        if(userName == userArray[i]) {
            return true;
        }
    }
    return false;
}

// User registration function
void registerUser() {
    system("cls");
    if(control >= 10) {
        cout << "System maximum capacity reached!" << endl;
        system("pause");
        return;
    }

    string fullName, userName, passWord;
    cout << "=== REGISTRATION ===" << endl;

    cout << "Enter full name: ";
    getline(cin, fullName);
    cout << "Enter username: ";
    getline(cin, userName);
    cout << "Enter password: ";
    getline(cin, passWord);

    if(checkUsername(userName)) {
        cout << "Username already exists!" << endl;
    } else {
        // Store user information
        userArray[control] = userName;
        nameArray[control] = fullName;
        passArray[control] = passWord;
        control++;
        cout << "Registration successful!" << endl;
    }
    system("pause");
}

// User login function
void loginUser() {
    system("cls");
    if(control == 0) {
        cout << "No users registered yet!" << endl;
        system("pause");
        return;
    }

    string userName, passWord;
    cout << "=== LOGIN ===" << endl;
    cout << "Enter username: ";
    getline(cin, userName);
    cout << "Enter password: ";
    getline(cin, passWord);

    // Check credentials
    for(int i = 0; i < control; i++) {
        if(userName == userArray[i] && passWord == passArray[i]) {
            cout << "Login successful!" << endl;
            system("pause");
            bankingMenu(i);
            return;
        }
    }

    cout << "Invalid credentials!" << endl;
    system("pause");
}

// Banking operations menu
void bankingMenu(int userIndex) {
    int choice = 0;

    while(true) {
        system("cls");
        cout << "=== BANKING MENU ===" << endl;
        cout << "Welcome, " << nameArray[userIndex] << "!" << endl;
        cout << "1. View Balance" << endl;
        cout << "2. Deposit Money" << endl;
        cout << "3. Withdraw Money" << endl;
        cout << "0. Logout" << endl;
        cout << "Enter your choice: ";
        cin >> choice;
        cin.ignore();

        switch(choice) {
            case 1:
                viewBalance(userIndex);
                break;
            case 2:
                deposit(userIndex);
                break;
            case 3:
                withdraw(userIndex);
                break;
            case 0:
                cout << "Logging out..." << endl;
                system("pause");
                return;
            default:
                cout << "Invalid choice!" << endl;
                system("pause");
        }
    }
}

// Deposit function
void deposit(int userIndex) {
    system("cls");
    int amount;
    cout << "=== DEPOSIT ===" << endl;
    cout << "Enter amount to deposit: $";
    cin >> amount;
    cin.ignore();

    if(amount > 0) {
        depositMoney[userIndex] += amount;
        cout << "Successfully deposited $" << amount << endl;
    } else {
        cout << "Invalid amount!" << endl;
    }
    system("pause");
}

// Withdraw function
void withdraw(int userIndex) {
    system("cls");
    int amount;
    cout << "=== WITHDRAW ===" << endl;
    cout << "Enter amount to withdraw: $";
    cin >> amount;
    cin.ignore();

    if(amount > 0 && amount <= depositMoney[userIndex]) {
        depositMoney[userIndex] -= amount;
        cout << "Successfully withdrew $" << amount << endl;
    } else {
        cout << "Invalid amount or insufficient balance!" << endl;
    }
    system("pause");
}

// Balance checking function
void viewBalance(int userIndex) {
    system("cls");
    cout << "=== ACCOUNT BALANCE ===" << endl;
    cout << "Current balance: $" << depositMoney[userIndex] << endl;
    system("pause");
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
