"use strict";

let ks = new KonsoleSettings();
ks.animatePrint = true;
ks.printLetterInterval = 10;
ks.registerDefaultKommands = false;
ks.prefix = "T:/>";
let konsole = new Konsole("#Console", ks);

function toAnchorTag(text, url)
{
    return `<a target='_blank' tabindex="-1" href='${url}'>${text}</a>`;
}

$(async ()=>{

    konsole.mcq = (question, choices, correctOption, correctMsg, wrongMsg) =>{
        return new Promise(async (resolve, reject)=>{
            let selectedChoice = await konsole.choice(question, choices);

            if(selectedChoice == correctOption)
            {
                await konsole.print(correctMsg);
                resolve(true);
            }
            else{
                
                await konsole.print(wrongMsg);
                resolve(false);
            }
        });
    }

    konsole.RegisterKommand(new Kommand("about", "me", null, ()=>{
        return new Promise((resolve, reject)=>{
            konsole.print(...medata.about).then(resolve);
        });
    }));

    konsole.RegisterKommand(new Kommand("quiz", "test your programming IQ.", null, ()=>{
        return new Promise(async (resolve, reject)=>{
            let correctAnsCount = 0;
            let totalQuesCount = 2;

            await konsole.print("Use arrow keys to select your answer");
            await konsole.print("good luck!");
            await konsole.print("----------");
            
            if(await konsole.mcq("Q.1) which programming language is the best?", [ "Java", "C++", "Python", "Assembly"], "C#", "score++;\n","score--; correct answer is C#.\n")) correctAnsCount++;
            
            if(await konsole.mcq("Q.2) was this quiz fun?", ["Yes", "Yes", "Yes", "No"], "Yes", "score++;","score--;")) correctAnsCount++;

            await konsole.print(`score: ${correctAnsCount}/${totalQuesCount}`)

            konsole.awaitKommand();
        });
    }));

    konsole.RegisterKommand(new Kommand("langs", "programming languages i've worked with.", null, ()=>{
        return new Promise((resolve, reject)=>{
            konsole.print(...medata.languages).then(resolve);
        });
    }));

    konsole.RegisterKommand(new Kommand("projects", "projects i've worked or working on.", null, ()=>{
        return new Promise(async (resolve, reject)=>{
            for (const project of medata.projects) {
                await konsole.print(`${project.url ? toAnchorTag(project.name, project.url) : project.name} - ${project.desc}${project.sourceUrl ? " - " + toAnchorTag("source code", project.sourceUrl) : ""}`);
            }
            resolve();
        });
    }));

    konsole.RegisterKommand(new Kommand("tech", "frameworks and libraries i've worked with or interested in learning.", null, ()=>{
        return new Promise(async (resolve, reject)=>{
            for (const tech of medata.technologies) {
                await konsole.print(`${tech.name}\n${"¯".repeat(tech.name.length)}\n    ${tech.items.join("\n    ")}`);
            }
            resolve();
        });
    }));

    konsole.RegisterKommand(new Kommand("links", "links to my socials...", null, ()=>{
        return new Promise(async (resolve, reject)=>{
            for (const link of medata.links) {
                await konsole.print(toAnchorTag(link.name, link.url));
            }
            resolve();
        });
    }));

    konsole.RegisterKommand(new Kommand("-".repeat(10), "-".repeat(30), null, ()=>{}));

    konsole.RegisterKommand(new Kommand("noanimate", "disable text printing animation", null, ()=>{
        return new Promise(async (resolve, reject)=>{
            konsole.konsoleSettings.animatePrint = false;
            await konsole.print("Text printing animation disabled.");
            resolve();
        });
    }));

    konsole.RegisterDefaultKommands();

    await konsole.print("Welcome!")
    await konsole.print("Type 'help' to see available commands.")

    konsole.awaitKommand();

    konsole.elem.focus()
});