## GitGoin'
### Submitted to nwHacks 2023
### Edward Chong, Ryan Gao, Julia You, Kelly Zhang



### The Problem

One of the best ways to learn as a new programmer is to contribute to open-source projects. However, one major problem that occurs is not knowing where to find the ones that you're best suitable to contribute to.

### Our Solution

We came up with a solution to this problem by building an AI-powered web application that scans data from your Github and matches it to existing issues on open-source projects that align with your own skills and interests.

### How we built it

We built the AI aspect of our application on top of the Google Cloud Platform, using the Cloud Natural Language API. This allowed us to perform entity analysis on data that we took from users' Github (repos, readmes, most used technologies) and relate them to tags on open-source project issues (essentially a matching algorithm)

We used Express/Node.js for the backend and Github OAuth to generate a token to authenticate users and gain access to their data to make customized recommendations. The frontend UI was built using React.js and ChakraUI, and design was done in Figma.

### Challenges we ran into
A major challenge that we ran into was architecting the backend due to the sheer amount of data that we were working with (since we were querying a user's entire github data), but we were able to make it work thanks to async functions and caffeine. Google Cloud Platform was also difficult to work with as sometimes we were overloading the API and it would shut us down (but that's to be expected with GCP)

### What we learned
- Back-end development (express, node.js)
- Working with google cloud platform
- NLP/entity analysis

### What's next for GitGoin'
We want to improve the matching algorithm, and gamify the open-source contribution package (badges, awards, etc), but we're pretty proud of what we came up with in such a short amount of time!

### Technologies Used
react, express, node, javascript, oauth, gcp, nlp, chakraui, html/css, figma
