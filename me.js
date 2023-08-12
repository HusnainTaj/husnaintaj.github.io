class category
{
    name = "";
    items = [];

    constructor(n,i)
    {
        this.name = n;
        this.items = i;
    }
};

class project
{
    name = "";
    desc = "";
    url = "";
    sourceUrl = "";

    constructor(n,d,u,s)
    {
        this.name = n;
        this.desc = d;
        this.url = u;
        this.sourceUrl = s;
    }
};


class link
{
    name = "";
    url = "";

    constructor(n,d,u)
    {
        this.name = n;
        this.url = u;
    }
};

let medata = {
    "about":[
        "I'm Husnain Taj.", 
        `A Programmer...`,
        `Try some other commands.`
    ],
    "languages":[
        "C#",
        "Javascript + Typescript",
        "C++",
        "Python",
        "Java + Kotlin",
        "Rust [planning]",
        "Dart [planning]"
    ],
    "projects":[
        new project("KonsoleJS", "A JS Library for building console like UI in your website", "https://github.com/HusnainTaj/KonsoleJS"),
        new project("Flat Snake", "A minimalist retro style snake game", "https://husnain.taj.contact/games/fs", "https://github.com/HusnainTaj/FlatSnake"),
        new project("Platformer Quest", "A puzzle platformer game", "https://husnain.taj.contact/games/pq", "https://github.com/HusnainTaj/Platformer-Quest"),
        new project("Shooting Galary", "A simple over the counter style duck shooting game", "https://husnain.taj.contact/games/sg", "https://github.com/HusnainTaj/ShootingGalary"),
        new project("Tiny Tank Wars", "A local 2 player 2d top-down tanks shooter game", "https://husnain.taj.contact/games/ttw", "https://github.com/HusnainTaj/TinyTankWars"),
        new project("Unlucky Ball", "A puzzle platformer with annoyingly hard controls", "https://husnain.taj.contact/games/ub", "https://github.com/HusnainTaj/UnluckyBall"),
        new project("DPI Finder", "Simple web app to find DPI of a mouse", "https://github.com/HusnainTaj/DPI-Finder"),
        new project("Draggable Nestable List", "JavaScript Library for adding rearranging and nesting functionality to simple lists", "https://github.com/HusnainTaj/DraggableNestableList"),
    ],
    "technologies":[
        new category("Web",
        [
            `Blazor`,   
            `ASP.NET MVC`,
            `Razor Pages`,
            `Angular`,
            `Firebase`,
            `Wordpress`,
        ]),
        new category("Desktop",
        [
            `Electron`,
            `Windows Forms`,
            `Windows Presentation Foundation (WPF)`,
            `Windows Services`,
            `Tauri`,
        ]),
        new category("Android",
        [
            "Native",
            "Jetpack Compose",
            `MAUI [planning]`,
            `Flutter [planning]`,
        ]),
        new category("Testing",
        [
            "NUnit",
            "Stryker Mutator [planning]",
        ]),
        new category("Crypto/Web3",
        [
            "Solidity",
            "Solana Smart Contracts using Rust [planning]"
        ]),
    ],
    "links":[
        new link("Email","mailto:husnain.taj@gmail.com" ),
        new link("GitHub","https://github.com/HusnainTaj/"),
        new link("LinkedIn","https://www.linkedin.com/in/husnain-taj/"),
    ]
};