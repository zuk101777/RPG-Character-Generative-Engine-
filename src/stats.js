const { uniqueNamesGenerator, adjectives, colors, animals, verbs } = require('unique-names-generator');

const positions = ["PG", "PG", "SG", "SG", "SF", "PF", "C"]
const skillsets = ["Playmaker", "Garbage Collector" ,"Bucket Getter", "Cold-Blooded", "Mobile Artillery Cannon",
                  "Pitbull", "Showstopper", "Dime Dropper", "Highflyer", "Cookie Monster", "Hired Gunner", "Dominator", "Postman",
                  "Anchor", "Demigod", "Clamper", "Middy Maniac", "Jellyman", "Mr. Trip Dub", "Showtime" ] 
const namesDatabase= [
    "Aaron","Abdul","Abe","Abel","Abraham","Abram","Adalberto","Adam","Adan","Adrian","Agustin",
    "Ahmad","Ahmed","Al","Alan","Albert","Alberto","Alden","Aldo","Alec","Alejandro","Alex","Alexis",
    "Alfonso","Alfred","Alfredo","Ali","Allan","Alonzo","Alphonso","Alton","Alva","Alvaro","Alvin",
    "Amado","Amos","Anderson","Andre","Andreas","Andrew","Andy","Angel","Angelo","Anthony","Antoine","Anton",
    "Antonio","Antony","Antwan","Archie","Ardenv","Ariel","Arlen","Armando","Arnold","Arnoldo","Arron",
    "Arthur","Arturo","Asa","Aubrey","August","Augustine","Augustus","Aurelio","Austin","Avery","Barney",
    "Barrett","Barry","Bart","Barton","Basil","Ben","Benedict","Benito","Benjamin","Bennett","Benny","Benton",
    "Bernard","Bernardo","Bernie","Berry","Bert","Bertram","Bill","Billy","Blaine","Blair","Blake","Bo","Bob",
    "Bobby","Booker","Boris","Boyd","Brad","Bradford","Bradley","Branden","Brandon","Brant","Brendan",
    "Brendon","Brent","Brenton","Bret","Brett","Brian","Brice","Britt","Brock","Broderick","Brooks","Bruce",
    "Bruno","Bryan","Bryant","Bryce","Bryon","Buck","Bud","Buddy","Buford","Burl","Burt","Burton","Buster",
    "Byron","Caleb","Calvin","Cameron","Carey","Carl","Carlo","Carlos","Carlton","Carmelo","Carmen","Carmine",
    "Carol","Carrol","Carson","Carter","Cary","Casey","Cecil","Cedrick","Cesar","Chad","Chadwick","Chance",
    "Chang","Charles","Charlie","Chas","Chase","Chauncey","Chester","Chet","Chi","Chong","Chris","Christian",
    "Christopher","Chuck","Chung","Clair","Clarence","Clark","Claud","Claude","Claudio","Clay","Clayton",
    "Clement","Clemente","Cleo","Cletus","Cleveland","Cliff","Clifford","Clifton","Clint","Clinton","Clyde",
    "Cody","Colby","Cole","Coleman","Colin","Collin","Colton","Columbus","Connie","Conrad","Cordell","Corey",
    "Cornelius","Cornell","Cortez","Cory","Courtney","Coy","Craig","Cristobal","Cristopher","Cruz","Curt",
    "Curtis","Cyril","Cyrus","Dale","Dallas","Dalton","Damian","Damon","Dan","Dana","Dane","Danial","Daniel",
    "Danilo","Danny","Dante","Darell","Daren","Dario","Darius","Darnell","Daron","Darren","Darrick","Darron",
    "Darryl","Darwin","Daryl","Dave","David","Davis","Dean","Deandre","Deangelo","Dee","Del","Delbert","Delmar",
    "Demarcus","Demetrius","Dennis","Denny","Denver","Deon","Derek","Derrick","Deshawn","Desmond","Devin",
    "Devon","Dewayne","Dewey","Dewitt","Dexter","Dick","Diego","Dillon","Dino","Dion","Dirk","Domenic","Domingo",
    "Dominic","Dominick","Dominique","Don","Donald","Dong","Donn","Donnell","Donnie","Donny","Donovan","Donte",
    "Dorian","Dorsey","Doug","Douglas","Doyle","Drew","Duane","Dudley","Duncan","Dustin","Dusty","Dwayne",
    "Dwight","Dylan","Earl","Earle","Earnest","Ed","Eddie","Eddy","Edgar","Edgardo","Edison","Edmond","Edmund",
    "Edmundo","Eduardo","Edward","Edwardo","Edwin","Efren","Elbert","Elden","Eldon","Eldridge","Eli","Elias",
    "Elijah","Eliseo","Elisha","Elliot","Ellis","Ellsworth","Elmer","Elmo","Eloy","Elroy","Elton","Elvin","Elvis",
    "Elwood","Emanuel","Emerson","Emery","Emil","Emilio","Emmanuel","Emmett","Emmitt","Emory","Enoch","Enrique",
    "Erasmo","Eric","Erik","Erin","Ernest","Ernesto","Ernie","Errol","Ervin","Erwin","Esteban","Ethan","Eugene",
    "Eugenio","Eusebio","Evan","Everett","Everette","Ezekiel","Ezequiel","Ezra","Fabian","Faustino","Fausto",
    "Federico","Felipe","Felix","Felton","Ferdinand","Fermin","Fernando","Fidel","Filiberto","Fletcher","Florencio",
    "Florentino","Floyd","Forest","Forrest","Foster","Frances","Francesco","Francis","Francisco","Frank","Frankie",
    "Franklin","Franklyn","Fred","Freddie","Freddy","Frederic","Fredric","Fredrick","Freeman","Fritz","Gabriel",
    "Gale","Galen","Garfield","Garland", "Garrett","Garry","Garth","Gary","Gaston","Gavin","Gayle","Gaylord",
    "Genaro","Gene","Geoffrey","George","Gerald","Geraldo","Gerard","Gerardo","German","Gerry","Gil","Gilbert",
    "Gilberto","Gino","Giovanni","Giuseppe","Glen","Glenn","Gonzalo","Gordon","Grady","Graham","Graig","Grant",
    "Granville","Greg","Gregg","Gregorio","Gregory","Grover","Guadalupe","Guillermo","Gus","Gustavo","Guy","Hai",
    "Hal","Hank","Hans","Harlan","Harland","Harley","Harold","Harris","Harrison","Harry","Harvey","Hassan","Hayden",
    "Haywood","Heath","Hector","Henry","Herb","Herbert","Heriberto","Herman","Herschel","Hershel","Hilario","Hilton",
    "Hipolito","Hiram","Hobert","Hollis","Homer","Hong","Horace","Horacio","Hosea","Houston","Howard","Hoyt","Hubert",
    "Huey","Hugh","Hugo","Humberto","Hung","Hunter","Hyman","Ian","Ignacio","Ike","Ira","Irvin","Irving","Irwin",
    "Isaac","Isaiah","Isaias","Isiah","Isidro","Ismael","Israel","Issac","Ivan","Ivory","Jacinto","Jack","Jackie",
    "Jackson","Jacob","Jacques","Jae","Jaime","Jake","Jamaal","Jamal","Jamar","Jamel","James","Jamey","Jamie",
    "Jamison","Jan","Jared","Jarod","Jarrett","Jarvis","Jason","Jasper","Javier","Jay","Jayson","Jc","Jean","Jed",
    "Jeff","Jefferey","Jefferson","Jeffrey","Jerald","Jeramy","Jere","Jeremiah","Jeremy","Jermaine","Jerold","Jerome",
    "Jeromy","Jerrell","Jerrod","Jerrold","Jerry","Jess","Jesse","Jessie","Jesus","Jewel","Jim","Jimmie","Jimmy",
    "Joan","Joaquin","Jody","Joe","Joel","Joey","John","Johnathan","Johnathon","Johnie","Johnny","Johnson","Jon",
    "Jonah","Jonas","Jordan","Jordon","Jorge","Jose","Josef","Joseph","Josh","Joshua","Josiah","Jospeh","Josue",
    "Juan","Jude","Judson","Jules","Julian","Julio","Julius","Junior","Justin","Kareem","Karl","Kasey","Keenan",
    "Keith","Kelley","Kelly","Kelvin","Ken","Kendall","Kendrick","Keneth","Kenneth","Kennith","Kenny","Kent","Kenton",
    "Kermit","Kerry","Keven","Kevin","Kieth","Kim","King","Kip","Kirby","Kirk","Korey","Kory","Kraig","Kris","Kristopher",
    "Kurt","Kurtis","Kyle","Lacy","Lamar","Lamont","Lance","Landon","Lane","Lanny","Larry","Lauren","Laurence","Lavern",
    "Laverne","Lawerence","Lawrence","Lazaro","Leandro","Lee","Leif","Leigh","Leland","Lemuel","Len","Lenard","Lenny",
    "Leo","Leon","Leonard","Leonardo","Leonel","Leopoldo","Leroy","Les","Lesley","Leslie","Lester","Levi","Lewis",
    "Lincoln","Lindsay","Lindsey","Lino","Linwood","Lionel","Lloyd","Logan","Lon","Long","Lonnie","Lonny","Loren",
    "Lorenzo","Lou","Louie","Louis","Lowell","Loyd","Lucas","Luciano","Lucien","Lucio","Lucius","Luigi","Luis","Luke",
    "Lupe","Luther","Lyle","Lyman","Lyndon","Lynn","Lynwood","Mac","Mack","Major","Malcolm","Malcom","Malik","Man",
    "Manual","Manuel","Marc","Marcel","Marcelino","Marcellus","Marcelo","Marco","Marcos","Marcus","Margarito",
    "Maria","Mariano","Mario","Marion","Mark","Markus","Marlin","Marlon","Marquis","Marshall","Martin","Marty","Marvin",
    "Mary","Mason","Matt","Matthew","Maurice","Mauricio","Mauro","Max","Maximo","Maxwell","Maynard","Mckinley","Mel",
    "Melvin","Merle","Merlin","Merrill","Mervin","Micah","Michael","Michal","Michale","Micheal","Mickey","Miguel",
    "Mike","Milan","Miles","Milford","Millard","Milo","Milton","Minh","Miquel","Mitch","Mitchell","Modesto","Moises",
    "Monroe","Monte","Monty","Morgan","Morris","Morton","Mose","Moshe","Murray","Myles","Myron","Napoleon","Nathan",
    "Nathanael","Neal","Ned","Neil","Nelson","Nestor","Neville","Newton","Nicholas","Nick","Nickolas","Nicky","Nicolas",
    "Nigel","Noah","Noble","Noe","Noel","Nolan","Norbert","Norberto","Norman","Normand","Norris","Octavio","Odell","Odis",
    "Olen","Olin","Oliver","Ollie","Omar","Omer","Oren","Orlando","Orval","Orville","Oscar","Osvaldo","Oswaldo","Otha",
    "Otis","Otto","Owen","Pablo","Palmer","Paris","Parker","Pasquale","Pat","Patricia","Patrick","Paul","Pedro","Percy",
    "Perry","Pete","Peter","Phil","Philip","Phillip","Pierre","Porfirio","Porter","Preston","Prince","Quentin","Quincy",
    "Quinn","Quintin","Quinton","Rafael","Raleigh","Ralph","Ramiro","Ramon","Randal","Randall","Randolph","Randy","Raphael",
    "Rashad","Raul","Ray","Rayford","Raymon","Raymond","Raymundo","Reed","Refugio","Reggie","Reginald","Reid","Reinaldo",
    "Renaldo","Renato","Rene","Reuben","Rex","Rey","Reyes","Reynaldo","Rhett","Ricardo","Rich","Richard","Richie","Rick",
    "Rickey","Ricky","Rico","Rigoberto","Riley","Rob","Robbie","Robby","Robert","Roberto","Robin","Robt","Rocco","Rocky",
    "Rod","Roderick","Rodger","Rodney","Rodolfo","Rodrick","Rodrigo","Rogelio","Roger","Roland","Rolando","Rolf","Rolland",
    "Roman","Romeo","Ron","Ronald","Ronnie","Ronny","Roosevelt","Rory","Rosario","Roscoe","Rosendo","Ross","Roy","Royal",
    "Royce","Ruben","Rubin","Rudolf","Rudolph","Rudy","Rueben","Rufus","Rupert","Russ","Russel","Rusty","Ryan","Sal",
    "Salvador","Salvatore","Sam","Sammie","Sammy","Samuel","Sandy","Sanford","Sang","Santiago","Santo","Santos","Saul",
    "Scott","Scottie","Scotty","Sean","Sebastian","Sergio","Seth","Seymour","Shad","Shane","Shannon","Shaun","Shawn",
    "Shayne","Shelby","Sheldon","Shelton","Sherman","Sherwood","Shirley","Shon","Sid","Sidney","Silas","Simon","Sol",
    "Solomon","Son","Sonny","Spencer","Stacey","Stacy","Stan","Stanford","Stanley","Stanton","Stefan","Stephan","Stephen",
    "Sterling","Steve","Steven","Stevie","Stewart","Stuart","Sung","Sydney","Sylvester","Tad","Tanner","Taylor","Ted",
    "Teddy","Teodoro","Terrance","Terrell","Terrence","Terry","Thad","Thaddeus","Thanh","Theo","Theodore","Theron","Thomas",
    "Thurman","Tim","Timmy","Timothy","Titus","Tobias","Toby","Todd","Tom","Tomas","Tommy","Tony","Tory","Tracey","Tracy",
    "Travis","Trent","Trenton","Trevor","Trey","Trinidad","Tristan","Troy","Truman","Tuan","Ty","Tyler","Tyree","Tyrell",
    "Tyron","Tyrone","Tyson","Uno","Val","Valentine","Van","Vance","Vaughn","Vern","Vernon","Vicente","Victor","Vince",
    "Vincent","Vincenzo","Virgil","Virgilio","Vito","Von","Wade","Waldo","Walker","Wallace","Wally","Walter","Walton",
    "Ward","Warner","Warren","Waylon","Wayne","Weldon","Wendell","Werner","Wes","Wesley","Weston","Whitney","Wilber",
    "Wilbert","Wilbur","Wilburn","Wiley","Wilford","Wilfred","Wilfredo","Will","Willard","William","Williams","Willian",
    "Willie","Willis","Willy","Wilmer","Wilson","Wilton","Winford","Winfred","Winston","Woodrow","Wyatt","Xavier", "Yong",
    "Young","Zachariah","Zachary","Zack","Zuzu","Zane", "Zayn"] 
const namesSetList = new Set();
const nickNamesSetList = new Set();
const baseXPPoints = 24;

class Stats{
        constructor(){
            this.fn="";
            this.ln="";
            this.nn="";
            this.position="";
            this.skillset="";
            this.heightFeet=0;
            this.heightInches=0;
            this.weight=0;
            this.rarity=0;
        };
        generateName(){
            this.fn = namesDatabase[Math.floor(Math.random()*namesDatabase.length)];
            this.ln = namesDatabase[Math.floor(Math.random()*namesDatabase.length)];
            let fullName = this.fn + " " + this.ln;
            if(namesSetList.has(fullName)){
                this.generateName();
            }
            else{
                namesSetList.add(fullName);
                return fullName;  
            }
        };
        generateNickName(){
            let nickName = uniqueNamesGenerator({ dictionaries: [adjectives, colors, animals] }); 
            this.nn = nickName;
            if(nickNamesSetList.has(nickName)){
                this.generateNickName();
            }
            else{
                nickNamesSetList.add(nickName)
                const nnFormat = new RegExp("_", 'g'); 
                return "THE " + nickName.replace(nnFormat," ").toUpperCase();
            }
        };
        generateHeight(){
            if(this.position === 'PG'){
                this.heightFeet = 6;
                if(this.skillset === 'Playmaker' || this.skillset === 'Showtime'){
                    this.heightInches = Math.floor(Math.random()*(11 - 8) + 8);
                }
                else if(this.skillset === 'Pitbull'){
                    this.heightInches = 0;
                }
                else{
                    this.heightInches = Math.floor(Math.random() * (5 - 1) + 1);
                }
            }
            else if(this.position === 'SG'){
                this.heightFeet = 6;
                this.heightInches = Math.floor(Math.random()*( 8 - 3) + 3);
            }
            else if(this.position === 'SF'){
                this.heightFeet = 6;
                this.heightInches = Math.floor(Math.random()*(10 - 6) + 6);
            }
            else if(this.position === 'PF'){
                if(this.skillset === 'Demigod' || this.skillset === 'Anchor' || this.skillset === 'Garbage Collector'){
                    this.heightFeet = 7;
                    this.heightInches = Math.floor(Math.random() * (4 - 0) + 0);
                    }
                else{
                    this.heightFeet = 6;
                    this.heightInches = Math.floor(Math.random() * (12 - 8) + 8);
                    }
            }
            else{
                this.heightFeet = Math.floor(Math.random() * (8 - 6) + 6)
                if(this.heightFeet === 6){
                    this.heightInches = Math.floor(Math.random() * (12 - 10) + 10)
                }
                else{
                    this.heightInches = Math.floor(Math.random() * (3 - 0) + 0)
                }
            }
            return this.heightFeet + "'" + this.heightInches;
            
        };
        generateWeight(){
            if(this.position==='PG'){
                this.weight = Math.floor(Math.random() * (211 - 190) + 190)
            }
            else if(this.position === 'SG'){
                this.weight = Math.floor(Math.random() * (221 - 195) + 195)
            }
            else if(this.position === 'SF'){
                this.weight = Math.floor(Math.random() * (251 - 205) + 205)
            }
            else if(this.position === 'PF'){
                this.weight = Math.floor(Math.random() * (261 - 215) + 215)
            }
            else{
                this.weight = Math.floor(Math.random() * (301 - 220) + 220)
            }
            return this.weight + ' lbs';
        };
        generatePosition(){
            this.position=positions[Math.floor(Math.random()*positions.length)];
            return this.position;
        };
        generateSkillset(){
            this.skillset=skillsets[Math.floor(Math.random()*skillsets.length)];
            return this.skillset;
        };
        generateSkillTree(rating){
            let ballerSkillPoints = [
                ["Dribbling", 1],  //0
                ["Passing", 1],    //1
                ["Long Range", 1], //2
                ["Mid Range", 1],  //3
                ["Inside", 1],     //4
                ["Free Throws", 1], //5 
                ["Rebounding", 1], //6
                ["Defence", 1],  //7
                ["Steals", 1], //8
                ["Blocks", 1], //9
                ["Hustle", 1], //10
                ["Clutch", 1]];//11
            let totalXP = baseXPPoints + rating;
            for(let currentSkillIndex=0; currentSkillIndex<ballerSkillPoints.length; currentSkillIndex++){
                if(generateBool()){
                    ballerSkillPoints[currentSkillIndex][1]+=1;
                    totalXP--;
                    if(totalXP === 0){
                        break;
                    }
                }
                if(currentSkillIndex === ballerSkillPoints.length-1){
                    currentSkillIndex=-1;
                }
            }
             let ballerSkillPointsWithSkillsetBonus =  calculateTraitBonus(ballerSkillPoints, this.skillset)
            var skilltoMap = [];
            for(let i=0;i<ballerSkillPoints.length;i++){
                skilltoMap.push({
                    Skill: ballerSkillPointsWithSkillsetBonus[i][0],
                    Value: ballerSkillPointsWithSkillsetBonus[i][1],
                    
                  });
            }
        return skilltoMap;
        };
} 
    // helper functions
    function generateBool(){
        let randomBoolNumber=Math.floor(Math.random()*(2));
        return(randomBoolNumber == 0 ? false : true)
    };
    function calculateTraitBonus(ballerSkillPoints, skillset){
        if(skillset == "Playmaker"){
            ballerSkillPoints[0][1]+=2;
            ballerSkillPoints[1][1]+=2;
        }
        else if(skillset == "Garbage Collector"){
            ballerSkillPoints[9][1]+=2;
            ballerSkillPoints[10][1]+=2;
        }
        else if(skillset == "Dime Dropper"){
            ballerSkillPoints[8][1]+=2;
            ballerSkillPoints[1][1]+=2;
        }
        else if(skillset == "Dominator"){
            ballerSkillPoints[7][1]+=2;
            ballerSkillPoints[3][1]+=2;
        }
        else if(skillset == "Bucket Getter"){
            ballerSkillPoints[3][1]+=2;
            ballerSkillPoints[5][1]+=2;
        }
        else if(skillset == "Cold-Blooded"){
            ballerSkillPoints[11][1]+=2;
            ballerSkillPoints[2][1]+=2;
        }
        else if(skillset == "Showstopper"){
            ballerSkillPoints[0][1]+=2;
            ballerSkillPoints[11][1]+=2;
        }
        else if(skillset == "Hired Gunner"){
            ballerSkillPoints[3][1]+=2;
            ballerSkillPoints[2][1]+=2;
        }
        else if(skillset == "Postman"){
            ballerSkillPoints[4][1]+=2;
            ballerSkillPoints[6][1]+=2;
        }
        else if(skillset == "Cookie Monster"){
            ballerSkillPoints[8][1]+=2;
            ballerSkillPoints[9][1]+=2;
        }
        else if(skillset == "Pitbull"){
            ballerSkillPoints[7][1]+=2;
            ballerSkillPoints[10][1]+=2;
        }
        else if(skillset == "Mobile Artillery Cannon"){
            ballerSkillPoints[2][1]+=2;
            ballerSkillPoints[5][1]+=2;
        }
        else if(skillset == "Highflyer"){
            ballerSkillPoints[4][1]+=2;
            ballerSkillPoints[6][1]+=2;
        }
        else if(skillset == "Clamper"){
            ballerSkillPoints[7][1]+=2;
            ballerSkillPoints[8][1]+=2;
        }
        else if(skillset == "Demigod"){
            ballerSkillPoints[4][1]+=2;
            ballerSkillPoints[9][1]+=2;
        }
        else if(skillset == "Middy Maniac"){
            ballerSkillPoints[3][1]+=2;
            ballerSkillPoints[8][1]+=2;
        }
        else if(skillset == "Jellyman"){
            ballerSkillPoints[0][1]+=2;
            ballerSkillPoints[4][1]+=2;
        }
        else if(skillset == "Mr. Trip Dub"){
            ballerSkillPoints[10][1]+=2;
            ballerSkillPoints[1][1]+=2;
        }
        else if(skillset == "Anchor"){
            ballerSkillPoints[7][1]+=2;
            ballerSkillPoints[6][1]+=2;
        }
        else if(skillset == "Showtime"){
            ballerSkillPoints[11][1]+=2;
            ballerSkillPoints[1][1]+=2;
        }
        
        return ballerSkillPoints
    };

module.exports = Stats;
