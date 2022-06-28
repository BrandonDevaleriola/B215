# 1. How to solve difficult programming problems in under 30 minutes.
Similarly, whenever you try to solve a programming problem, there are 2 enemies you are fighting with.
Fight with them one by one.

The 2 enemies are:
Logic and Syntax

### Logic

This is hard to defeat but a pen and paper can easily defeat him.
First, create the logic on a rough piece of paper. Once done, congrats, you have defeated the first enemy.

### Syntax

Now aim for defeating the second enemy by programming the syntax on the IDE.
The main problem is that beginners directly begin writing the program even when they are unsure about the logic. Once you directly begin, without a proper plan, you wind or spending hours on a problem that could have been solved in like 30 minutes.

## 2. Phases of a coding interview

https://github.com/yangshun/lago

https://www.teamblind.com/post/New-Year-Gift---Curated-List-of-Top-100-LeetCode-Questions-to-Save-Your-Time-OaM1orEU

https://www.freecodecamp.org/news/coding-interviews-for-dummies-5e048933b82b/

https://hackernoon.com/14-patterns-to-ace-any-coding-interview-question-c5bb3357f6ed

Congratulations, you are ready to put your skills to practice! You have 30 minutes to solve the problem. This is where the real fun begins! Your interviewer will be looking to see that you meet the requirements of the role. It is up to you to show them that you have the skills. It is hard for the interviewer to know what you are thinking by just looking at your code. If you communicate your approach to the interviewer even before you start to code, you can validate your approach with them. This way, the two of you can agree on an acceptable approach.

### What to do when you get the question

For phone screens and remote interviews, have a paper and pen or pencil to jot down any notes or diagrams. If you are given a question about trees and graphs, it usually helps if you draw examples of the data structure.

Many candidates start coding as soon as they hear the question. That is usually a big mistake. First, take a moment and repeat the question back to the interviewer to make sure that you understand the question. If you misunderstand the question, then the interviewer can clarify.

Always seek clarification about the question upon hearing it, even if you think it is clear. You might discover that you have missed something. It also lets the interviewer know that you are attentive to details.

### Consider asking the following questions.

How big is the size of the input?
How big is the range of values?
What kind of values are there? Are there negative numbers? Floating points? Will there be empty inputs?
Are there duplicates within the input?
What are some extreme cases of the input?
How is the input stored? If you are given a dictionary of words, is it a list of strings or a trie?
After you have sufficiently clarified the scope and intention of the problem, explain your high-level approach to the interviewer, even if it is a naive solution. If you are stuck, consider various approaches and explain out loud why it may or may not work. Sometimes your interviewer might drop hints and lead you toward the right path.

Start with a brute-force approach. Communicate it to the interviewer. Explain the time and space complexities and clarify why it is bad. It is unlikely that the brute-force approach will be the one that you will be coding. At this point, the interviewer will usually pop the dreaded, “Can we do better?” question. This means they are looking for a more optimal approach.

This is usually the hardest part of the interview. In general, look for repeated work and try to optimize them by potentially caching the calculated result somewhere. Reference it later, rather than computing it all over again. I provide some tips on tackling topic-specific questions in detail below.

Only start coding after you and your interviewer have agreed on an approach and you have been given the green light.

### Starting to code
Use a good style to write your code. Reading code written by others is usually not an enjoyable task. Reading horribly formatted code written by others is even worse. Your goal is to make your interviewer understand your code so that they can quickly evaluate if your code does what it is suppose to and if it solves a given problem.

Use clear variable names and avoid names that are single letters, unless they are for iteration. However, if you are coding on a whiteboard, avoid using verbose variable names. This reduces the amount of writing you will have to do.

Always explain to the interviewer what you are writing or typing. This is not about reading, verbatim, to the interviewer the code you are producing. Talk about the section of the code you are currently implementing at a higher level. Explain why it is written as such, and what it is trying to achieve.

When you copy and paste in code, consider whether it is necessary. Sometimes it is, sometimes it is not. If you find yourself copying and pasting a large chunk of code spanning multiple lines, it is probably an indicator that you can restructure the code by extracting those lines into a function. If it is just a single line you copied, usually it is fine.

However, remember to change the respective variables in your copied line of code where relevant. Copying and pasting errors are a common source of bugs, even in day-to-day coding!

### After coding
After you have finished coding, do not immediately announce to the interviewer that you are done. In most cases, your code is usually not perfect. It may contain bugs or syntax errors. What you need to do is review your code.

First, look through your code from start to finish. Look at it as if it were written by someone else, and you are seeing it for the first time and trying to spot bugs in it. That’s exactly what your interviewer will be doing. Review and fix any issues you may find.

Next, come up with small test cases and step through the code (not your algorithm) with those sample input.

Interviewers like it when you read their minds. What they usually do after you have finished coding is get you to write tests. It is a huge plus if you write tests for your code even before they prompt you to do so. You should be emulating a debugger when stepping through your code. Jot down or tell them the values of certain variables as you walk the interviewer through the lines of code.

If there are large duplicated chunks of code in your solution, restructure the code to show the interviewer that you value quality coding. Also, look out for places where you can do short-circuit evaluation.

Lastly, give the time and space complexities of your code, and explain why it is such. You can annotate chunks of your code with their various time and space complexities to demonstrate your understanding of the code. You can even provide the APIs of your chosen programming language. Explain any trade-offs in your current approach versus alternative approaches, possibly in terms of time and space.

If your interviewer is happy with the solution, the interview usually ends here. It is also common that the interviewer asks you extension questions, such as how you would handle the problem if the whole input is too large to fit into memory, or if the input arrives as a stream. This is a common follow-up question at Google, where they care a lot about scale.

The answer is usually a divide-and-conquer approach — perform distributed processing of the data and only read certain chunks of the input from disk into memory, write the output back to disk and combine them later.

## General tips
Always validate input first. Check for inputs that are invalid, empty, negative, or different. Never assume you are given the valid parameters. Alternatively, clarify with the interviewer whether you can assume valid input (usually yes), which can save you time from writing code that does input validation.

Are there any time and space complexities requirements or constraints?

Check for off-by-one errors.

In languages where there are no automatic type coercion, check that concatenation of values are of the same type: int,str, and list.

After you finish your code, use a few example inputs to test your solution.

Is the algorithm supposed to run multiple times, perhaps on a web server? If yes, the input can likely be pre-processed to improve the efficiency in each API call.

Use a mix of functional and imperative programming paradigms:

Write pure functions as often as possible.
Use pure functions because they are easier to reason with and can help reduce bugs in your implementation.
Avoid mutating the parameters passed into your function, especially if they are passed by reference, unless you are sure of what you are doing.
Achieve a balance between accuracy and efficiency. Use the right amount of functional and imperative code where appropriate. Functional programming is usually expensive in terms of space complexity because of non-mutation and the repeated allocation of new objects. On the other hand, imperative code is faster because you operate on existing objects.
Avoid relying on mutating global variables. Global variables introduce state.
Make sure that you do not accidentally mutate global variables, especially if you have to rely on them.
Generally, to improve the speed of a program, we can choose to either use an appropriate data structure or algorithm, or to use more memory. It’s a classic space and time trade off.

Data structures are your weapons. Choosing the right weapon for the right battle is the key to victory. Know the strengths of each data structure and the time complexity for its various operations.

Data structures can be augmented to achieve efficient time complexity across different operations. For example, a HashMap can be used together with a doubly-linked list to achieve O(1) time complexity for both the get and put operation in an LRU cache.

HashMaps are probably the most commonly used data structure for algorithm questions. If you are stuck on a question, your last resort can be to enumerate through the possible data structures (thankfully there aren’t that many) and consider whether each of them can be applied to the problem. This has worked for me at times.

If you are cutting corners in your code, state that out loud to your interviewer, and explain to them what you would do outside of an interview setting (no time constraints). For example, explain that you would write a regex to parse a string rather than using split , which does not cover all cases.