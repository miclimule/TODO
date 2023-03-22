import React,{ useState } from 'react';

interface ITask {
    [key: string]: any;
    Text: string;
    sousTask1?: ITask;
    sousTask2?: ITask;
}
    
const convertToJSON = (input: string): ITask => {
const lines = input.split("\n");
const stack: ITask[] = [{ Text: "" }];
let currentLevel = 0;

lines.forEach((line) => {
    if (line.startsWith("&deb")) {
        const newTask: ITask = { Text: line.substr(5) };
        stack[currentLevel][`sousTask${Object.keys(stack[currentLevel]).length}`] = newTask;
        stack.push(newTask);
        currentLevel++;
        } else if (line === "&end") {
        stack.pop();
        currentLevel--;
        } else if (line.startsWith("&next")) {
        const newTask: ITask = { Text: line.substr(6) };
        stack[currentLevel][`sousTask${Object.keys(stack[currentLevel]).length}`] = newTask;
        } else {
        stack[currentLevel].Text = line;
        }
    });

    return stack[0];
};
function TestCreationJson() {
    const [input, setInput] = useState("");
    const [output, setOutput] = useState("");
    
    const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setInput(event.target.value);
        setOutput(JSON.stringify(convertToJSON(event.target.value), null, 2));
    };

    return (
        <div>
        <textarea value={input} onChange={handleInputChange} />
        <pre>{output}</pre>
        </div>
    );
};

export default TestCreationJson;