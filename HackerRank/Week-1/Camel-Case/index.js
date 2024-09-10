
using namespace std;

// trim from start (in place)
static inline void ltrim(std::string &s) {
    s.erase(s.begin(), std::find_if(s.begin(), s.end(), [](unsigned char ch) {
        return !std::isspace(ch);
    }));
}

// trim from end (in place)
static inline void rtrim(std::string &s) {
    s.erase(std::find_if(s.rbegin(), s.rend(), [](unsigned char ch) {
        return !std::isspace(ch);
    }).base(), s.end());
}

// trim from both ends (in place)
static inline void trim(std::string &s) {
    ltrim(s);
    rtrim(s);
}

int main() {
    /* Enter your code here. Read input from STDIN. Print output to STDOUT */   
    for (string line; getline(cin, line);) {

        // split line
        char action = line[0];
        char mvcn = line[2];
        string s  = line.substr(4, line.size()-1); 
        //start
        if (action=='S'){
            if (mvcn =='M') s.replace(s.size()-2, s.size()-1, "");
            else if (mvcn =='C') s = (char)tolower(s[0]) + s.substr(1, s.size()-1);
            else if (mvcn =='V'){}
            for(int i=0;i<s.length();i++){
                if(s[i]>='A'&&s[i]<='Z'){
                    s = s.substr(0, i) + ' ' + (char)tolower(s[i]) + s.substr(i+1, s.size()-1);
                }
            }
        }
        else if (action=='C'){
            while(int space = s.find(' ')){
                if (space<0) break;
                s = s.substr(0, space) + (char)toupper(s[space+1]) + s.substr(space+2, s.size()-1);
            }
            if (mvcn =='M') s = s + "()";
            else if (mvcn =='C') s = (char)toupper(s[0]) + s.substr(1, s.size()-1);
            else if (mvcn =='V'){}
        }
        trim(s);
        cout << s << endl;
    }
    return 0;
}
