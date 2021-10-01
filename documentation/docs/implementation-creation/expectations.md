---
sidebar_position: 2
---

# Expectations

## Remember: Keep your codebases _simple_, yet _robust_.

If a newbie dev to your framework comes along and can't grok the high level architecture within 10 minutes, it probably means that you went a little overboard in the engineering department.

Alternatively, you should _never_ forgo following fundamental best practices for the sake of simplicity, lest we teach that same newbie dev the _wrong_ way of doing things.

The quality & architecture of Conduit implementations should reflect something similar to an early stage startup's MVP: functionally complete & stable, but not unnecessarily over-engineered.

## To write tests, or to not write tests?

**TL;DR** — we require a minimum of **one** unit test with every repo, but we'd definitely prefer all of them to include excellent testing coverage if the maintainers are willing to add it (or if someone in the community is kind enough to make a pull request :)

We think tests are a good idea, and we're huge fans of TDD in general. However, building Conduit implementations without full testing coverage is a meaningful time investment as is, so we originally didn’t include full testing coverage in the spec because we figured that if people wanted it, then it would be a great “extra credit” objective for the repo. For example, our Angular 2 repo had a request for unit tests and some awesome community members are now working on a PR for it.

Another reason we didn’t include them in the spec is from the "Golden Rule" above:

> The quality & architecture of Conduit implementations should reflect something similar to an early stage startup's MVP: functionally complete & stable, but not unnecessarily over-engineered.

Most startups we know that work in consumer facing apps (like Conduit) don’t apply TDD/testing until they have solid product-market fit, which is smart because they then spend most of their time iterating on product & UI and thus are far more likely to find PMF.

This doesn’t mean that TDD/testing === over-engineering, but in certain circumstances that statement does evaluate true (ex: consumer product finding PMF, sideprojects, robust prototypes, etc).

That said, we do _prefer_ that every repo includes excellent tests that are exemplary of TDD/testing with that framework 👍

## Project Overview

"Conduit" is a social blogging site (i.e. a Medium.com clone). It uses a custom API for all requests, including authentication. You can view a live demo over at https://demo.realworld.io
