# Two economies under AI: function goods, competitive goods, and where Celaut fits

*October 2026 · Based on ["Bienes de función y bienes competitivos"](https://github.com/cosas-varias/posibles-escenarios-sobre-ia/blob/master/bienes-de-funcion-y-bienes-competitivos.md) (in Spanish), from the [posibles-escenarios-sobre-ia](https://github.com/cosas-varias/posibles-escenarios-sobre-ia) repository.*

A common intuition says that once AI is capable enough, nearly all software and every automatable service will become free, and a large part of economic inequality will disappear with them. The document discussed here argues that the intuition is right, but **only for half of all goods**. This post summarises its argument and then tries to be honest about what Celaut has to do with it, and what it does not.

## The distinction: how success is defined

What matters is not how hard a good is to produce, but **what its success is measured against**. There are two options, and they exclude each other:

- An **absolute threshold**: does it work or not?
- **Everyone else**: is it better than the rival's?

Under abundant artificial intelligence, the first category collapses to marginal cost. The second never does.

## Type 1: function goods

These only have to do their job: a small business's management app, a restaurant's website, a booking form, a script that sorts files. Their acceptance criterion is **binary and saturable**: the booking is recorded or it isn't. Once the threshold is crossed, an app twice as good doesn't produce twice the bookings, because the ceiling is set by the business's demand, not by the tool.

It follows that any solution that works is enough, that the marginal cost of the next tailor-made copy tends to zero (the cost of inference), and that no vendor can hold a price above the cost of generating it again. In this half the promise of abundance **comes true literally**: what costs tens of thousands of euros in development today becomes free and tailored, and the surplus is shared among all the former customers.

## Type 2: competitive goods

These compete against other people's: a trading bot, a dynamic-pricing system, an ad-bidding algorithm, a fraud detector, a drug-discovery tool. There is no threshold here, because **the bar is everyone else's percentile**. A trading bot isn't "good"; it is good *relative to* whatever sits on the other side of the trade.

If you spend $200 of compute asking an AI for a trading bot, that bot faces the bots of people who spent $10 and of people who spent $20,000. The question is no longer whether it works, but where in that distribution it lands. Four consequences follow:

1. **Compute becomes competitive advantage.** What you buy isn't the tool; it's the percentile.
2. **The market degenerates into a compute auction.** Competition shifts from talent to capital.
3. **Red Queen effect.** Aggregate spending grows without bound while relative positions stay where they were.
4. **Surplus dissipation.** In zero-sum games, collective spending creates no value: it only reallocates what exists, burning energy and silicon.

Access to the *model* is democratised; access to *compute* is not. And if quality is an increasing function of compute, the advantage of capital returns intact, now expressed in FLOPs rather than factories.

## The variable that decides everything

All of this rests on one empirical unknown: **what shape is the curve linking compute spent to quality of result?**

- If it **saturates early** (spending a hundred times more yields a result barely 5% better), the $200 user ends up at a negligible distance from the $20,000 one, Type 2 behaves *de facto* like Type 1, and abundance really does equalise. This is the scenario that pushes toward decentralised competition.
- If it **doesn't saturate** (each order of magnitude buys a sustained improvement), whoever spends most wins most, and whoever wins most can spend most. Concentration is mechanical, and it pushes toward centralised control.

Two further dynamics complicate the picture. The boundary between the types **migrates**: when a function good becomes free for everyone, competition moves to the next unsaturated link. And inequality becomes **positional, not material**: nobody lacks anything, and yet the distance between first and last can still grow. A universal basic income is effective against scarcity but barely touches the contest for a position, because if everyone receives the same, everyone can spend the same on compute and the percentiles don't move.

The document's conclusion: advanced AI produces not one economy but two, and the future **is decided in how the compute that feeds competitive goods is shared out**.

## Where Celaut comes in

So much for the document. What follows is our reading, not part of it, and should be read as such.

Celaut is a peer-to-peer architecture for designing and distributing software: reproducible services that any node can run, advertise or pay for, with no central authority. Set beside the two economies, it touches them at four points.

**1. Function goods are what a network like this distributes at close to zero cost.** A service is a reproducible, content-addressed unit; once published, any node can run it. The Unstoppable Skills registry also lets you search by the problem rather than by the provider, with benchmarks and reputation. That fits Type 1: when all that matters is that something works, what you need is to find it and run it, not to buy it.

**2. Compute is the scarce resource of Type 2, and Celaut is, among other things, a compute market.** Anyone can [rent out their machine](/depin) when they aren't using it and price it around what their electricity costs; nodes negotiate cost between peers and settle in Ergo or Bitcoin. If "the scarce thing isn't the model but the compute", it matters that compute be offered in an open market that needs no permission to enter, and not only in the catalogues of a handful of providers. Renting capacity in bursts is also a way for a small player to compete without owning silicon.

**3. Game of Prompts is a Type 2 arena built on purpose.** On that platform, made of Celaut services, creators design game-services that evaluate robots, and players write solver-services that try to maximise their score; results and prizes are recorded on Ergo. It is exactly the trading-bot scenario: a solver's value is its position against the others, and the compute spent on it has a visible effect on that position. It works as a small, measurable laboratory for the curve everything depends on: does doubling compute improve the result a little, or a lot?

**4. Reputation matters more in Type 2 than in Type 1.** With a function good you can check for yourself whether it works. With a competitive one, knowing whether a service is really better than another takes comparable measurements and a track record that is costly to fake. Celaut's design, with a reputation layer in which nobody spams without risking something, points that way, though it is one piece and not a solution.

### What Celaut does not solve

It would be dishonest to present it as an answer to the problem. Celaut **does not change the shape of the curve**, and if the curve doesn't saturate, whoever has more capital will still buy more compute, in an open market too. Nor does it correct positional inequality: opening the market lowers the barriers to entry and keeps compute from depending on a handful of providers, but it doesn't stop the biggest spender from winning most. What it can do is move the document's axis in the decentralising direction: infrastructure with no owner, function goods circulating as a commons, and the contest for positions fought on ground where taking part needs no permission.

If the document is right that the future is decided in how compute is shared out, then building an open network where that compute is offered, paid for and verified between peers is not an engineering detail. It is a bet on one of the two outcomes.

## Further reading

- The original document: [Bienes de función y bienes competitivos](https://github.com/cosas-varias/posibles-escenarios-sobre-ia/blob/master/bienes-de-funcion-y-bienes-competitivos.md) (Spanish).
- The [Celaut paradigm](/paradigm), with the formal specification.
- [Rent your PC](/depin), for the supply side of compute.
