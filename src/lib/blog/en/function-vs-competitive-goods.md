# Function goods and competitive goods: why abundance is not enough to eliminate inequality

## The premise

A common intuition says that once AI is capable enough, software and automatable services will become practically free, and a substantial part of economic inequality will disappear with them. This essay argues that the intuition is right **only for some goods**, and puts forward a hypothesis about which ones.

The relevant distinction is not how hard a good is to produce, but **how its success is defined**:

- against an **absolute threshold**: does it work or not?
- against **everyone else**: is it better than the rival's?

These are not two boxes but the two poles of a continuum. One question is enough to place a good on it: **if every rival got the same improvement I did, how much of my improvement's value would I keep?** If you keep nearly all of it, the good sits near the function pole. If you keep almost none, it sits near the competitive pole. We will call that proportion *positional dependence*.

The hypothesis is that, under abundant artificial intelligence, the price of goods near the first pole tends to collapse toward the cost of producing them, and the price of goods near the second does not, because what is paid for there is not the good but the advantage.

## The function pole

Here sit the goods that are only expected to **do a job**: a booking form, an internal inventory tool, an administrative procedure, an association's accounting software, a script that sorts files.

Their acceptance criterion is **binary and saturable**. The booking is recorded or it isn't. Once the threshold is crossed, extra quality adds little: a booking app twice as good does not produce twice the bookings, because the ceiling is set by the business's demand.

Three chained consequences follow:

1. **Any solution that works is enough.** There is no incentive to pay for a superior version, because "superior" means little once the threshold is reached.
2. **The cost of the next tailor-made copy approaches the cost of inference.** It is not zero: integration with other systems, maintenance and liability when something breaks still weigh. But the part that dominates the price today, development work, is the part that gets cheapest.
3. **A price far above that cost is hard to sustain**, because the customer can generate an alternative for little.

At this pole the promise of abundance is essentially fulfilled: what costs tens of thousands of euros in development today comes within almost anyone's reach, and the surplus is shared among the former customers.

Its size, however, should not be exaggerated. **The pure function pole is narrower than it looks.** A restaurant's website does a job (show the menu, take bookings), but it also competes for the attention of someone choosing where to eat. The functional part gets cheaper; the part that competes for attention does not. Most real goods are mixtures like this, and the useful question is not "which type is it?" but "what fraction of its value is positional?".

## The competitive pole

Here sit the goods that **compete against other people's**, whose performance is measured by **how much better they are than the rival's**: a trading bot, a dynamic-pricing system, an ad-bidding algorithm, a fraud detector, a logistics engine, a drug-discovery tool.

There is no saturation threshold, because **the bar is everyone else's percentile**. A trading bot isn't "good"; it is good *relative to* whatever is on the other side of the trade.

Suppose a user asks an AI "give me a trading bot to generate income" and spends $200 of compute. Their bot faces the bots of people who spent $10 and of people who spent $20,000. The question is no longer whether it works, but **where in that distribution it lands**.

### Compute is one source of advantage, not the only one

It would be tempting to conclude that compute becomes *the* new capital. It is more accurate to say it is **one of the forms of capital that return**. In trading, latency and physical proximity to the exchange also matter; in fraud detection, years of proprietary transaction data; in logistics, the fleet and the warehouses; in drugs, regulatory access and clinical trials; in almost all of them, distribution and brand.

Do these reinforce or weaken concentration? Mostly they reinforce it, because they tend to sit in the same hands as compute and feed each other: more data improves the model, a better model attracts more customers, more customers produce more data. Some weaken it: niche data, local relationships, domain knowledge that compute cannot buy. Making the model cheaper does not remove these advantages; in some markets it makes them the only thing that tells one competitor from another.

### Not everything is zero-sum

Competition at this pole is not always a zero-sum game, and the strength of the diagnosis has to match each case.

- **Zero-sum or close to it.** In speculative trading or ad bidding, what one side wins the other loses. Here the **Red Queen effect** (aggregate spending grows while relative positions barely change) and **surplus dissipation** (collective spending on compute reallocates rents without creating new value, consuming energy and silicon in the process) apply in full.
- **Positive-sum.** In drug discovery, fraud detection or logistics, competition also produces something: a treatment, less fraud, cheaper shipping. Part of the spending is duplicated between rivals and lost, but not all of it; the social result can be positive even when the race is expensive.

Inequality can be reproduced in both cases. Waste, on the other hand, is characteristic of the first.

## Two curves, not one

The argument depends on two empirical relationships that are worth separating.

> **Curve 1: how much quality does each extra unit of compute buy?**
>
> **Curve 2: how much market share or profit does each extra unit of quality buy?**

The first can **saturate early** (spending a hundred times more gives a barely better result, and the $200 user ends up close to the $20,000 one) or **not saturate** (each order of magnitude of compute buys a sustained improvement, even a logarithmic one).

The second depends on market structure. In markets where **the winner takes almost everything** (a search engine, a platform with network effects, the best price in a transparent market), a tiny advantage is enough to concentrate. In **differentiated** markets (by geography, niche, preference), a quality advantage translates into a modest share advantage.

Concentration depends on the combination:

| | **Differentiated market** | **Winner takes almost everything** |
| :--- | :--- | :--- |
| **Curve 1 saturates** | Open competition: the competitive pole behaves almost like the function pole. | Concentration through factors other than compute: data, distribution, brand. |
| **Curve 1 does not saturate** | Capital advantage, but bounded: several large players coexist. | Strong concentration: whoever spends most wins most, and whoever wins most can spend most. |

Only the bottom-right cell justifies the picture of a spiral toward **centralised control** and **techno-feudalism**. The top-left cell pushes toward **decentralised competition**. The other two are mixed, and different sectors will probably land in different cells.

What this suggests is that **who holds power may depend largely on technical facts and market structure**, not only on political decisions. If in a sector curve 1 does not saturate and the winner takes almost everything, regulating access to the models does little, because the model is not the scarce thing. Politics does not disappear: it can act on curve 2 (data portability, interoperability, competition law), which is more malleable than the first.

## What if compute keeps getting cheaper?

The cost per unit of compute has fallen steadily for decades [source needed]. This admits two readings, and both are plausible.

- **Equalising effect.** If the point where curve 1 flattens soon comes within anyone's reach, what gives an edge to whoever spends $20,000 today will be had tomorrow by whoever spends $200.
- **Red Queen effect.** If the curve does not flatten, cheaper compute only raises the level of the auction: everyone buys more with the same money, and relative positions stay where they were.

Which one dominates depends, again, on the shape of curve 1. The price of compute does not settle the question; it moves it.

## Two second-order dynamics

**1. Migration from the function pole to the competitive one.** The boundary moves. When a function good becomes free and every competitor has it, it stops differentiating, and competition moves to another dimension. A restaurant that stands out today for having a decent website will not stand out for that tomorrow, and will compete on dynamic pricing, purchasing optimisation or reputation. **Competition does not disappear: it moves to the next unsaturated link.** Every price collapse at the function pole tends to open a new front at the competitive one.

**2. Inequality becomes more positional than material.** The combined result may be a world where functional needs are met for most people at very low cost, and where competition for relative positions is more intense and more expensive than ever. This form of inequality has a logical property that depends on no data at all: **a mechanism that gives everyone the same does not change relative positions.** A universal basic income is effective against scarcity, but if everyone receives the same, everyone can spend the same on compute, and the percentiles stay where they were. It can widen who takes part; it does not change who wins.

## The strongest objections

**The technological optimist** would say: AI does not only make compute cheaper, it makes the other factors cheaper too. It makes it easier to generate synthetic data, build distribution, create a brand. And every market that saturates opens new ones; there are always niches where a small player wins. *Reply:* that is possible, and it is exactly the top-left cell. But it does not follow from AI's capability; it follows from the shape of the two curves, and some factors (latency, physical infrastructure, regulatory access) do not get cheaper with software.

**The concentration sceptic** would say: technological advantages have always eroded. Monopolies weaken, rivals imitate, antitrust steps in, and history is full of displaced leaders. *Reply:* that is also possible, and it pushes toward the left-hand cells. The difference is that classic erosion depended on imitating being cheaper than innovating. If the advantage lies in accumulated volumes of compute and data, imitating may cost as much as competing. That is a hypothesis, not a certainty, and the indicators in the next section are there to test it.

## How we will know where we are heading

The hypothesis is falsifiable. These indicators would show which cell describes each sector:

- **Margins in bespoke software and standardised management.** If they fall steadily, the function pole behaves as expected.
- **Concentration of compute spending.** What fraction of global training and inference spending belongs to the largest buyers, and how it changes.
- **Marginal returns in competitive benchmarks.** How much the result improves when compute is doubled in tasks where systems compete against each other: a direct measure of curve 1.
- **The link between compute and R&D spending and market share.** If share tracks spending with little scatter, curve 2 is steep.
- **Leader turnover.** How often the top positions change hands in AI-intensive sectors.

## Side-by-side summary

| | **Function pole** | **Competitive pole, positive-sum** | **Competitive pole, zero-sum** |
| :--- | :--- | :--- | :--- |
| **Success criterion** | Absolute: does it work? | Relative, but value is created | Relative: better than the rival? |
| **Does it saturate?** | Yes, at the threshold of usefulness | Depends on curve 1 | Depends on curve 1 |
| **Cost** | Tends to that of inference and integration | Growing spend, partly productive | Growing spend, largely dissipated |
| **Sources of advantage** | Almost none once past the threshold | Compute, data, infrastructure, regulatory access | Compute, latency, data, distribution |
| **Fate of the surplus** | Shared among users | Split between users and winners | Concentrated in whoever wins the race |
| **Effect on inequality** | Tends to reduce it | Depends on curve 2 | Tends to reproduce it |
| **Pushes power toward** | Decentralisation | Depends on the cell | Centralisation, if curve 1 does not saturate |

## Conclusion: two overlapping logics

Advanced AI does not produce a single economy but at least two overlapping logics that coexist inside almost every good.

In the **function** logic, the promise of abundance is essentially fulfilled: cost falls toward the cost of production, and overspending gives no edge. It is a post-scarcity economy for part of consumption, and it is real.

In the **competitive** logic, the promise is not fulfilled on its own: the relative criterion prevents saturation, and compute joins data, infrastructure and distribution as sources of advantage. Whether this reproduces inequality, and how strongly, depends on two curves that we do not know well today and that may differ from sector to sector.

The most frequent analytical error is to extrapolate one of the two logics to the whole. Whoever looks at the first announces the end of scarcity; whoever looks at the second announces definitive feudalism. Both describe one part of the phenomenon well, and both are wrong to present it as the whole.

Most likely, the outcome will not be decided in function goods, where the direction looks clear, but **in how compute and the other factors that feed competitive goods are shared out**, and in the shape that the two curves take, sector by sector.

## Where Celaut comes in

What follows is our reading of how one specific project relates to this argument, and it should be read as such.

Celaut is a peer-to-peer architecture for designing and distributing software: reproducible services that any node can run, advertise or pay for, with no central authority. It touches the argument at four points.

**1. The functional part is what a network like this distributes at close to zero cost.** A service is a reproducible, content-addressed unit; once published, any node can run it. The Unstoppable Skills registry also lets you search by the problem rather than by the provider, with benchmarks and reputation. When all that matters is that something works, what you need is to find it and run it, not to buy it.

**2. Compute is one of the sources of advantage at the competitive pole, and Celaut is, among other things, a compute market.** Anyone can [rent out their machine](/depin) when they aren't using it and price it around what their electricity costs; nodes negotiate cost between peers and settle in Ergo or Bitcoin. An open market, which needs no permission to enter, reduces dependence on a handful of providers, and renting capacity in bursts lets a small player compete without owning silicon. Celaut acts on that factor and not on the others: it brings no proprietary data, no latency, no distribution.

**3. Game of Prompts is a laboratory for curve 1.** On that platform, made of Celaut services, creators design game-services that evaluate robots, and players write solver-services that try to maximise their score; results and prizes are recorded on Ergo. It is an explicit, measurable competitive case: it lets you observe how much a solver's position improves when more compute is spent on it, which is exactly one of the indicators above.

**4. Reputation matters more at the competitive pole.** With a function good you can check for yourself whether it works. With a competitive one, knowing whether a service is really better than another takes comparable measurements and a track record that is costly to fake. Celaut's design, with a reputation layer in which nobody spams without risking something, points that way, though it is one piece and not a solution.

### What Celaut does not solve

Celaut **does not change the shape of either curve**. If curve 1 does not saturate and the market rewards the winner, whoever has more capital will still buy more compute, in an open market too. Nor does it correct positional inequality. What it can do is push in the decentralising direction on the factor it acts on: compute infrastructure with no owner, the functional part of goods circulating as a commons, and competition fought on ground where taking part needs no permission.

If the outcome depends largely on how compute is shared out, then building an open network where that compute is offered, paid for and verified between peers is not an engineering detail. It is a bet on one of the cells.

## Further reading

- The [Celaut paradigm](/paradigm), with the formal specification.
- [Rent your PC](/depin), for the supply side of compute.
