---
date_created: 2024-04-10  20:39:10
date_modified: 2024-07-13  02:51:38
draft: false
language: 
spaces:
  - "[[obsidian.md]]"
subtype: refactored
title: How I manage Projects and TASKS in Obsidian
type: 
related-to: 
tags:
  - Obsidian
  - Task-Management
---


> [!NOTE] This page is still under construction



I manage and document all my projects in Obsidian – professional and private.


I use a combination of [Todoist](https://todoist.com/help/articles/introduction-to-filters-V98wIH?locale=en&articleId=introduction-to-filters-V98wIH) and [Obsidian Task Plugin](https://github.com/obsidian-tasks-group/obsidian-tasks).[^3]

Despite many people disliking the Obsidian task-plugin, I build a fully functional project-management-system that suits my needs perfectly.
(I might even prefer the obsidian tasks to any other solution, as they are always linked to the content which the task is refering to).

My TASKS are added always directly on corresponding notes (duuh[^2]), which are related to i.e. their `Project`, a `Meeting note` or `daily journal`, or just a `Task note`.



Every Area or Project has its own "Dashboard" ( a `Project-MOC`,[^1] ) with custom queries, showing only relevant tasks and related info.


A `Daily Dashboard` gives an overview about all Deadlines within all areas (Work, sidehussle, private, personal). A clean layout provides an oversight over tasks of the week and a box focussing today.

![[How I manage Projects and TASKS in Obsidian-20240530172701741.png|600]]





My Daily Dashboard informs me about upcoming projects with a high workload, which requires timeblocking with the team. It reminds me of contacts who I should follow up with once in a while.


The [task-plugin-documentation](https://publish.obsidian.md/tasks/Queries/About+Queries) is very extensive and straight forward, so I wont be explaining how to setup a query on this page. Since my own queries are tailored to my very specific system, I wont paste them here either, since they wont help a lot. If you got questions tho, hit me up, I am happy to help.

### Todo-Checkboxes vs Tasks

I differenciate between different *Action-Items*: **TASKS**, **TODOs** and **Efforts**.

**Todos** (simple Checkboxes) don't have Due dates or Reminders, while **Tasks** are being planned & tracked. Similar to the [LYT-Framework](https://www.linkingyourthinking.com/) I use the terminology "Efforts" for Private Tasks, which normally have no priority or urgancy and are therefore not displayed alongside my important work-related Tasks.

| Term | Meaning |
| ---- | ---- |
| Task | Has a duedate, a priority and external stakeholder (tracked + reminders) |
| Todo (Checkbox) | Small Actionitems / Steps which are needed to complete a Task (not tracked, no reminders)  |
| Effort | Private Stuff I want to do, but nothing bad happens, when I postpone it (soft reminders) |





- [ ] This is a checkbox with a small todo, it is not tracked and has no dueDate
	- [x] This is a small sub-todo
- [ ] `#to/do ` This is an Example Task with a dueDate 📅 2024-04-11
	- [ ] scheduled Tasks can have subtasks, that have no seperate DueDate
- [ ] `#to/reachout` Is an Effort, used to remind me to reach out to somebody

This is just for explainatory purposes, I never add such different types of actions in a list under each other. Action-Items are always added on contextual notes (i.e. a project or meeting note or daily journal).

### `#to`-Tasks

All my Tasks use the Hashtag `#to`, to differentiate between a simple checkbox (can be set within the plugins settings) and to be found by my dataview/SQL queries.


I use Hashtag nesting to categorize the tasks further:


|  Hashtags | How I use them |
| ---- | ---- |
| `#to/do` | A Task, which has a Deadline. |
| `#to/read` | Stuff on my reading list, which I wanna prioritize |
| `#to/BeContinued` | Stuff and Ideas I wrote about, which I want to get back to |
| `#to/follow-up` | Reminder for work related follow ups |
| `#to/reachout` | Reminds me to reach out to certain people (private stuff) and friends |
| `#to/learn` | pretty self explainatory |
| `#to/enjoy` | Stuff I want to do more often. If I happen to have free time on my hands, I query those "todos"  |

[^3]: Actually I only use todoist to be able to add tasks on my iPhone quickly and receive reminders on my phone instead of on computer. Everything else is handled in Obsidian, especially work related Tasks.
[^2]: I just say this, since there is this weird practise of throwing all Todos on one single note and only manage them through querying their metadata. First of all: Its messy. Secondly, that way the tasks itself have to contain more metadata explaining the context they are relevant to, which is neither elegant nor efficient. This method also actively ignores Obsidians main power: Interlinking notes. Poor choice of design imo.
[^1]: MOC = Map of content, an indexpage linking to other notes. Read more about my [[My Obsidian System#My Obsidian Terminology| Terminology]]