# AI usage log

SimpleDev was built during MLH Global Hack Week: Builders Week (November 6–12, 2026) with **Claude (Anthropic)** as a coding assistant, used through Claude Code. This log says where AI was used and where it wasn't.

Every commit that Claude helped write has a `Co-Authored-By: Claude` line, so `git log` shows it too.

## Summary

| Area                                                                              | Who did it                                                             |
| --------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| Idea, audience and scope (one concept: the `for` loop, in Spanish, for beginners) | The owner                                                              |
| Plan for the week (Trello board: daily cards, script, quiz outline, page layout)  | The owner                                                              |
| Code (components, loop logic, quiz, styles, logo)                                 | Claude, from the owner's requests; the owner reviewed and committed it |
| Spanish teaching text and quiz questions                                          | Claude, following the owner's script and quiz outline                  |
| Deployment to Vercel                                                              | Claude, with access the owner approved                                 |
| README, this log, demo script and daily reports                                   | Claude                                                                 |
| Demo video and the voice in it; Discord and Twitch participation                  | The owner                                                              |

## Day by day

| Day         | Date    | What AI did                                                                                                                                                                                      | What the owner did                                                                                                                                   |
| ----------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| Preparation | Nov 1–5 | Nothing recorded in the repository.                                                                                                                                                              | Chose the stack (React + TypeScript), the single concept and the scope; wrote the plan on Trello: explanation script, 3 quiz questions, page layout. |
| 1           | Nov 6   | Set up the Vite project and wrote the explanation and the first example (`for` that prints 0, 1, 2), with the loop logic in its own file.                                                        | Asked for it, reviewed and committed it.                                                                                                             |
| 2           | Nov 7   | Wrote the editable example: − and + change the limit (0 to 10) and the console updates.                                                                                                          | Asked for it, reviewed and committed it.                                                                                                             |
| 3           | Nov 8   | Wrote the 3-question quiz with instant feedback and explanations.                                                                                                                                | Gave the questions (predict the output, count the turns, spot the infinite loop); reviewed and committed it.                                         |
| 4           | Nov 9   | Visual polish: color for each part of the `for`, step labels, fonts, logo and favicon; simpler Spanish wording.                                                                                  | Asked for it, reviewed and committed it.                                                                                                             |
| 5           | Nov 10  | Brought `main` up to date with Days 1–4, created the Vercel project, checked the live site and wrote the daily report.                                                                           | Approved Vercel access.                                                                                                                              |
| 6           | Nov 11  | Wrote the demo script; added the quiz's final result and "Volver a intentar" button from the owner's written requirements; wrote this log and the README; made the repository public when asked. | Wrote the requirements for the final result; asked for the repository to be public; records the demo.                                                |

## How AI was used

- **As a pair programmer, not as the author of the idea.** The owner decided what to teach, to whom and in what order. Claude turned each day's card into code.
- **Changes were checked before they shipped.** `npm run lint` and `npm run build` (type check included) passed on Day 5 for the code of Days 1–4, and on every change after that. The final quiz result was also tested with a temporary script that clicks through all scores (3, 2, 1 and 0 out of 3) in a simulated browser.
- **No AI at runtime.** The app doesn't call any AI service. Everything it shows is fixed text and a real `for` loop running in the browser.

## What was not done with AI

- The choice of the topic and the audience.
- The demo video and the voice in it.
- Participation in the GHW community (Discord and Twitch).
