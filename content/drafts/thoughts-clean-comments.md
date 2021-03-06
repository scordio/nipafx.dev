---
title: "Thoughts On Clean Comments"
draft: true
tags: [clean-code, clean-comments, documentation]
date: 0000-00-00
slug: ?p=1749
description: "If we want a clean codebase we need clean code and clean comments! Some thoughts on why this is so and how we might achieve it."
searchKeywords: "Clean Comments"
---

## Comments and Codebase

### Code vs Codebase

To make some distinctions easier, I will use the words *code* and *code base* with very specific meanings:

Code
:   The set of instructions written to be processed by a compiler or interpreter.
This includes the structure of files and folders (which is usually of interest to a compiler/interpreter) but excludes comments.

Codebase
:   All code and then some, especially all comments.

The strict interpretation of *code* as *instructions* is uncommon.
I am not proposing this as a new meaning (as if anybody would care if I did) but I think it might help throughout this post.

### Clean Codebase

If the code base consists of code and comments, it is obvious that a codebase's quality depends on both the code's *and* the comments' quality.
This goes both ways, i.e.
poorly written code is less awful if well commented (just stating this as a fact not as a proposed way to deal with bad code) and well written code will suffer if the comments are bad.

Now, this does not mean that we can just stop commenting altogether to avoid bad comments muddying our clean code.
Leaving out comments where they are required (wherever that is) is akin to leaving out code or tests where they are required.
While it might not fail in as obvious ways, it is as much of a shortcoming and just as detrimental to codebase quality.

> If we want a clean codebase we need clean code *and* clean comments!

So what is left to do is to decide what constitutes a clean comment.
This must include considerations of the different trade-offs and especially where we might need them and where not.

## Thoughts On Clean Comments

It is safe to say that clean code goes a long way in reducing the need for comments.
This is especially true for inline-comments that narrate what the code is doing.
Unless arcane and unavoidable language mechanisms are used, there is hardly a place for them.

But which comments will add value?
If the code is clean and thus readable, why do we need to add any information at all?

### Stability

Well understood and stable problem domains vs code close to client requirements

"Document only APIs" - in a large project it is not clear which things become APIs.

TODO

### Locality

TODO Comments and code must be close by ...

### Tested

Contract Comments should be close to what the tests cover

There is a test framework which tests immutability (starred on GitHub)

TODO

Random notes:

more often used -&gt; more comments

more complex domain logic -&gt; more comments

general assumption is that not everyone knows everything about the domain
