# Function goods and competitive goods: why abundance is not enough to eliminate inequality

## The premise

You often hear that once AI is capable enough, software and any automatable service will be practically free, and that this will do away with much of economic inequality. We think that holds for some goods and not for others, and that the line between them can be drawn.

What separates them is how their success is measured. There are two ways:

- against a **fixed threshold**: does it work?
- against **everyone else**: is it better than the rival's?

Hardly any good is purely one kind; most are a mix. To see where one falls, ask: if all my rivals got the same improvement I did, how much of its value would I keep? For a function good, nearly all of it. For a competitive good, almost none. We will call the part that is lost *positional dependence*.

The hypothesis is that, with abundant AI, the price of function goods tends to fall to what it costs to produce them, and the price of competitive goods does not, because there what people pay for is the edge over everyone else.

## Function goods

These only have to do their job: a booking form, an internal inventory tool, an administrative procedure, an association's accounting software, a script that sorts files.

Either they work or they don't. The booking gets recorded or it doesn't, and once it works, making it better adds little: a booking app twice as good doesn't bring twice the customers, because that depends on how many people want to eat there.

Three things follow:

1. **Any solution that works will do.** Nobody pays more for a better version when the one they have already does the job.
2. **Making another custom one costs little more than the inference.** Integration with other systems, maintenance and someone to answer when it breaks are still there, but development work, which is most of the price today, is exactly what gets cheaper.
3. **Charging much more than that is hard**, because the customer can have an alternative made for very little.

Here abundance delivers what it promises. What costs tens of thousands of euros in development today comes within reach of almost anyone, and the savings go to the people who used to be the customers.

That said, there are fewer pure function goods than it seems. A restaurant's website shows the menu and takes bookings, but it also competes with other restaurants' sites for the attention of someone deciding where to eat. The first part gets cheaper; the second doesn't. Most real goods mix the two, and what is worth knowing about each one is how much of its value depends on position.

## Competitive goods

These compete against other people's and are worth whatever they are worth against them: a trading bot, a dynamic pricing system, an ad-bidding algorithm, a fraud detector, a logistics engine, a drug-discovery tool.

There is no threshold to reach, because the reference point is what everyone else does. A trading bot is good against the bots on the other side of the trade, and stops being good as soon as a better one shows up.

Picture someone who asks an AI to "build me a trading bot to make money" and spends $200 on compute. Their bot will trade against those of people who spent $10 and people who spent $20,000. That it works is taken for granted; what matters is where in that distribution it lands.

### Where the edge comes from

Compute is one of the things that decide that position. In trading, latency and physical proximity to the exchange also count; in fraud detection, years of in-house transaction data; in logistics, the fleet and the warehouses; in drug discovery, regulatory access and clinical trials; and in nearly all of them, distribution and brand.

Most of these factors reinforce concentration, because they tend to sit in the same hands as compute and feed each other: more data improves the model, a better model draws customers, and customers produce more data. A few work in favour of small players: niche data, local relationships, deep knowledge of a field. Cheaper models make none of these advantages go away, and in some markets they leave them as the only thing that tells one competitor from another.

### Zero-sum and positive-sum

In some contests what one side wins the other loses; in others, something gets produced along the way.

- **Zero-sum or close to it.** Speculative trading and ad auctions are like this. Here the **Red Queen effect** shows up: everyone spends more and more while positions barely move. And the surplus is **dissipated**: the compute everyone burns only moves existing rents from one pocket to another, using up energy and silicon on the way.
- **Positive-sum.** In drug discovery, fraud detection or logistics, competition leaves something behind: a treatment, less fraud, cheaper shipping. Some of the spending is wasted because several rivals do the same work, but the net result for society can be positive even if the race is expensive.

Inequality can grow in both cases, but waste belongs mostly to the first.

## The two curves

Everything above depends on two relationships that can be measured:

> **Curve 1: how much quality each extra unit of compute buys.**
>
> **Curve 2: how much market share or profit each extra unit of quality buys.**

Curve 1 may flatten early, in which case spending a hundred times more gives a barely better result and the $200 bot ends up close to the $20,000 one. Or it may keep rising: each order of magnitude of compute buys a noticeable improvement, even if only at a logarithmic pace.

Curve 2 depends on what the market looks like. Where the winner takes nearly everything (search, platforms with network effects, the lowest price in a transparent market), a small edge is enough to concentrate it. Where the market is split by geography, niche or taste, being better earns a bit more share, but not much.

Putting the two together gives this table:

| | **Split market** | **Winner takes nearly all** |
| :--- | :--- | :--- |
| **Curve 1 flattens** | Open competition. Competitive goods behave almost like function goods. | Concentration driven by data, distribution or brand. |
| **Curve 1 keeps rising** | Capital gives an edge, but several large players fit. | Strong concentration: whoever spends most wins most, and whoever wins most can spend most. |

The picture of a spiral toward **centralised control**, what some call **technofeudalism**, belongs to the bottom-right cell. The top-left one leads to **decentralised competition**, and the other two sit in between. Most likely each sector ends up in a different cell.

This means the distribution of power may depend a lot on technical facts and on how each market is organised, on top of political decisions. In a sector where curve 1 keeps rising and the winner takes everything, regulating access to models does little, because what is scarce lies elsewhere. Where policy can act is on curve 2, which is easier to move: data portability, interoperability, competition enforcement.

## What if compute keeps getting cheaper?

The price of compute has been falling for decades, and that can have two opposite effects.

- **Levelling.** If the point where curve 1 flattens soon comes within anyone's reach, the edge that $20,000 buys today will be available tomorrow for $200.
- **Red Queen.** If the curve doesn't flatten, cheaper compute only raises the bids: everyone buys more with the same money and everyone stays where they were.

Which one weighs more again comes down to the shape of curve 1, so the price of compute on its own settles nothing.

## Two second-order effects

**1. The functional ends up competitive.** When a function good becomes free and everyone has it, it no longer sets anyone apart, and competition moves elsewhere. A restaurant that stands out today for having a decent website won't stand out for it tomorrow; it will compete on dynamic pricing, on how it buys supplies, or on its reputation. Each time the price of something functional collapses, competition moves to the next ground that isn't saturated yet.

**2. Inequality becomes a matter of position more than of resources.** The result could be a world where almost everyone has their functional needs met at very low cost and where, at the same time, competition for rank is harder and more expensive than ever. Against this kind of inequality there is a limit that depends on no data at all: if everyone is given the same, relative positions don't change. A universal basic income works against scarcity, but if everyone gets the same amount, everyone can spend the same on compute and everyone stays in their percentile. More people may join the contest, but the same ones will win.

## Objections

These are the two most serious objections we know of.

**A tech optimist** would say AI makes everything else cheaper too: generating synthetic data, getting distribution, building a brand. And that every market that saturates opens new ones, with niches where a small player can win. That could happen, and it would be the top-left cell. But it follows from the shape of the two curves, not from how capable AI is. Also, some factors don't get cheaper with software: latency, physical infrastructure, regulatory access.

**A concentration sceptic** would point out that technological advantages have always worn away: monopolies weaken, rivals copy, competition authorities step in, and history is full of toppled leaders. That could happen too, and it would push toward the left-hand cells. But that erosion worked because copying was cheaper than innovating. If the edge lies in accumulated compute and data, copying may cost as much as competing. We don't know, and the indicators in the next section are there to find out.

## How to tell where we are heading

The hypothesis can be tested. To know which cell each sector is in, these are the numbers to watch:

- **Margins on custom software and standardised management services.** If they fall steadily, function goods are behaving as the hypothesis predicts.
- **Concentration of compute spending:** what share of global training and inference spending comes from the largest buyers, and how it changes over time.
- **Marginal returns on competitive benchmarks:** how much the result improves when compute doubles, in tasks where one system plays against others. This measures curve 1 directly.
- **Relationship between spending (on compute and R&D) and market share.** If share tracks spending closely, curve 2 is steep.
- **Leader turnover:** how often the top positions change in the sectors that use AI most.

## Summary

| | **Function** | **Competitive, positive-sum** | **Competitive, zero-sum** |
| :--- | :--- | :--- | :--- |
| **Success criterion** | Does it work? | Better than the rival, and creates value | Better than the rival |
| **Saturates?** | Yes, at the threshold | Depends on curve 1 | Depends on curve 1 |
| **Cost** | Approaches inference plus integration | Rising spend, partly productive | Rising spend, largely wasted |
| **Sources of advantage** | Almost none past the threshold | Compute, data, infrastructure, regulatory access | Compute, latency, data, distribution |
| **Who keeps the surplus** | Users | Users and winners | Whoever wins the race |
| **Inequality** | Tends to fall | Depends on curve 2 | Tends to reproduce itself |
| **Where power goes** | Decentralisation | Depends on the cell | Centralisation, if curve 1 keeps rising |

## Conclusion

With advanced AI, two logics live side by side, often inside the same good.

In the functional part, abundance delivers: the price falls toward the cost of production and overspending buys no edge. For that part of consumption, post-scarcity is real.

In the competitive part it doesn't happen by itself. When you are measured against others there is no ceiling, and compute joins data, infrastructure and distribution as a source of advantage. Whether that reproduces inequality, and how much, depends on two curves we know poorly today and that may differ from sector to sector.

The most common mistake is to take one of the two logics for the whole. Whoever looks at the first announces the end of scarcity; whoever looks at the second, a permanent feudalism. Each is right about their part.

The functional side seems to have a fairly clear path. What is still undecided is how compute and the other factors that competitive goods live on get distributed, and what shape the two curves take in each sector.

## Where Celaut comes in

Celaut is our project, so what follows is how we see it fitting into this argument, with the bias that implies.

Celaut is a *peer-to-peer* architecture for designing and distributing software: reproducible services that any node can run, advertise or pay for, with no central authority. It meets the argument above in four places.

**1. It distributes the functional part almost for free.** A service is a reproducible, content-addressed unit, and once published any node can run it. The Unstoppable Skills registry also lets you search by the problem you want solved instead of by provider, with *benchmarks* and reputation. If all that matters is that something works, finding it and running it is enough.

**2. It is a compute market.** Anyone can [rent out their machine](/depin) when they aren't using it, at whatever price makes sense given their electricity bill; nodes negotiate among themselves and settle in Ergo or Bitcoin. An open market, which anyone can enter without asking permission, reduces dependence on a handful of providers, and renting capacity in bursts lets a small player compete without owning hardware. Celaut acts on compute and nothing else: it brings no proprietary data, no latency, no distribution.

**3. Game of Prompts is a way to measure curve 1.** On this platform, built with Celaut services, some people design game services that score bots and others write solver services that try to get the top score; results and prizes are recorded on Ergo. It is a competitive, measurable case: you can see how far a solver climbs the ranking when it gets more compute, which is one of the indicators above.

**4. Reputation matters more on the competitive side.** If a good is functional, you check for yourself whether it works. If it is competitive, knowing whether one service is better than another takes comparable measurements and a track record that is hard to fake. Celaut has a reputation layer where spamming costs something. It is one piece of the problem, nothing more.

### What Celaut does not solve

Celaut does not change the shape of either curve. If curve 1 keeps rising and the market rewards the winner, whoever has more capital will buy more compute, open market or not. Nor does it touch positional inequality. What it can do is push toward decentralisation where it has a say: that compute infrastructure has no owner, that the functional part of goods circulates as a commons, and that competing doesn't require anyone's permission.

If the outcome depends largely on how compute is distributed, building an open network where it is offered, paid for and verified between peers is a bet on one of the cells in the table.

## Further reading

- The [Celaut paradigm](/paradigm), with the formal specification.
- [Rent your PC](/depin), for the supply side of compute.
